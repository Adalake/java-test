import { Component, OnDestroy, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, noop, Subject, merge, zip, of } from 'rxjs';
import { map, tap, switchMap, first, filter } from 'rxjs/operators';
import { ProtocolService } from 'src/app/database/service/protocol.service';
import { ReconService } from 'src/app/database/service/recon.service';
import { ScanService } from 'src/app/database/service/scan.service';
import { StudyService } from 'src/app/database/service/study.service';
import {
  MachineService,
  MachineActionService
} from 'src/app/machine/machine.service';
import {
  ScanMessageTypes,
  ScanStart,
  ScanStop,
  CTScanCheckRequest,
  ScanItem
} from 'src/app/model/scan/message';
import { Study } from 'src/app/model/study';
import {
  GQLProtocolMenuService,
  ProtocolDataProviderToken,
  ProtocolMenuToken,
  IProtocolDataService
} from 'src/app/protocol/services/data';
import { ReconDataToken } from 'src/app/recon/services/data';
import { ScanDataToken, IScanDataService } from 'src/app/scan/services/data';
import { DuplicateDataService } from 'src/app/share/services/duplicate-data.service';
import { SignalRService } from 'src/app/signalr/signalr.service';
import {
  StudyDataProviderToken,
  IStudyDataService
} from 'src/app/study/services/data';
import { UserHint } from '../../model/user-hint';
import { Ng3MosueWheelEvent } from 'image-w/lib/controls/mouse/mouse-canvas.service';
import { messageOfType } from 'src/app/machine/model/utils';
import { ImageLoadService } from '../../modules/image-in-exam/image-load.service';
import { v4 as uuid } from 'uuid';
import { PATIENT_STUB } from 'src/app/patient/data/stub';
import { queryItemById } from 'src/share/store';
import { Protocol, ProtocolType, Posture } from 'src/app/model/protocol';
import { ProcessState } from 'src/app/model/share';
import { Patient } from 'src/app/model/patient';
import { Scan, ScanState } from 'src/app/model/scan/model';
import { FovsChanged } from 'image-w/lib/slice-show/event-distribute/event-distribute.component';
import { uuid2DICOMUID } from 'src/app/share/utils';
import { headE } from 'src/app/share/transaction';
import { UserHintService } from '../../userHint.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.less'],
  providers: [
    {
      provide: StudyDataProviderToken,
      useExisting: StudyService
      //   useValue: StudyInMemoryService,
    },
    {
      provide: ProtocolDataProviderToken,
      useExisting: ProtocolService
      //   useValue: ProtocolInMemoryService,
    },
    {
      provide: ProtocolMenuToken,
      //   useClass: InMemoryProtocolMenuService,
      useClass: GQLProtocolMenuService
      //   deps: [GraphqlClientService, ProtocolService],
    },
    {
      provide: ScanDataToken,
      useExisting: ScanService
    },
    { provide: ReconDataToken, useExisting: ReconService },
    DuplicateDataService
  ]
})
export class ExamComponent implements OnInit {
  // state: Exam.State = { $type: 'exam-state', scans: DUMMY_SCANS };
  private studyId: Study['id'] | undefined;
  get allMessages() {
    return this.userHintService.allMessages;
  }
  get studyFlushCounter() {
    return this.userHintService.studyFlushCounter;
  }
  set studyFlushCounter(value: number) {
    this.userHintService.studyFlushCounter = value;
  }
  scrollImage(e: Ng3MosueWheelEvent) {
    console.log(e);
  }
  idOfParameterPanelDisplay: string | undefined;
  modalityOfParameterPanelDisplay: 'Scan' | 'Recon' | undefined;

  get userHintModel() {
    return this.userHintService.userHintModel;
  }
  set userHintModel(value: any) {
    this.userHintService.userHintModel = value;
  }
  get currentProtocolId() {
    return this.userHintService.currentProcessingProtocol;
  }
  set currentProtocolId(id: Protocol['id'] | undefined) {
    this.userHintService.currentProcessingProtocol = id;
  }
  get currentScanId() {
    return this.userHintService.currentProcessingScan;
  }
  set currentScanId(id: Scan['id'] | undefined) {
    this.userHintService.currentProcessingScan = id;
  }
  studyId$?: Observable<Study['id']>;
  isShowDevelopMessage = false;
  changeExpand: boolean = false;
  toggleParameterFormExpand() {
    this.changeExpand = !this.changeExpand;
  }
  toggleShowDevelopMessage() {
    this.isShowDevelopMessage = !this.isShowDevelopMessage;
  }

  isPassed(message: UserHint.Message.Input) {
    return this.userHintService.isPassed(message);
  }
  developSwitchScanHasHappened() {
    if (this.userHintModel instanceof UserHint.State.Idle) {
      this.userHintModel = new UserHint.State.Idle(
        this.userHintModel.scanHasRemainder,
        !this.userHintModel.scanHasHappened
      );
    } else {
      this.userHintModel = new UserHint.State.Idle(false, false);
    }
  }
  developSendUserHintMessage(message: any) {
    this.userHintService.send2UserHint(message);
  }

  userHintAction(action: UserHint.Action) {
    this.userHintService.userHintAction(action, this);
  }
  check() {
    if (this.modalityOfParameterPanelDisplay === 'Recon') {
      throw Error(`Please select a scan first`);
    }
    this.machine.ctsMachine.scan.run({
      __typename: ScanMessageTypes.CTScanCheckRequest
    } as CTScanCheckRequest);
  }
  constructor(
    private machine: MachineService,
    // private readonly event: WebsocketEventsServiceNew,
    private readonly route: ActivatedRoute,
    public readonly signalR: SignalRService,
    private readonly machineAction: MachineActionService,
    @Inject(ScanDataToken) public readonly scanData: IScanDataService,
    private readonly imageLoadService: ImageLoadService,
    @Inject(StudyDataProviderToken)
    private readonly studyService: IStudyDataService,
    @Inject(ProtocolDataProviderToken)
    private readonly protocolService: IProtocolDataService,
    private userHintService: UserHintService
  ) {
    // this.event.connect();
  }
  // initStateOfStudy() {}
  ngOnInit() {
    this.studyFlushCounter = this.userHintService.studyFlushCounter;
    this.studyId$ = this.route.paramMap.pipe(
      map(p => p.get('studyId')),
      map(id => {
        if (id === null) {
          throw Error(`Study id not provided in route`);
        }
        return id;
      }),
      tap(id => {
        this.studyId = id;
      })
    );
  }
  onParameterPanelChanged($event: any) {
    console.log('on refetch updated data', $event);
  }

  onAddorDeleteProtocol() {
    this.userHintService.onchangeProtocolList();
  }
  setDataOfParameterPanel(data: { type: 'Scan' | 'Recon'; id: string }) {
    this.idOfParameterPanelDisplay = data.id;
    this.modalityOfParameterPanelDisplay = data.type;
  }
}
