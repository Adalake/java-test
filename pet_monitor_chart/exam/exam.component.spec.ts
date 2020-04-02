import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamComponent } from './exam.component';
import { HttpClient } from '@angular/common/http';
import { ExamModule } from '../../exam.module';
import { ScanState, ScanModel, ScanEntity } from 'src/app/scan/model';
import {
  DUMMY_UNSTARTED_SCAN,
  DUMMY_EXPOSURE_SCAN,
} from 'src/app/scan/services/stub';

describe('ExamComponent', () => {
  let component: ExamComponent;
  let fixture: ComponentFixture<ExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExamModule],
      providers: [{ provide: HttpClient }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change scan card from unstarted to exposure', () => {
    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    component.state = {
      $type: 'exam-state',
      scans: [DUMMY_UNSTARTED_SCAN],
      currentScanId: DUMMY_UNSTARTED_SCAN.id,
    };
    fixture.detectChanges();
    component.currentScanStartExposure();
    fixture.detectChanges();
    expect(component.currentScan).toBeTruthy();
    expect((component.currentScan as ScanEntity).model.state).toEqual(
      ScanState.Exposure,
    );
  });
  it('should change scan card from exposure to finished', () => {
    fixture = TestBed.createComponent(ExamComponent);
    component = fixture.componentInstance;
    component.state = {
      $type: 'exam-state',
      scans: [DUMMY_EXPOSURE_SCAN],
      currentScanId: DUMMY_EXPOSURE_SCAN.id,
    };
    fixture.detectChanges();
    component.currentScanFinish();
    fixture.detectChanges();
    expect(component.currentScan).toBeTruthy();
    expect((component.currentScan as ScanEntity).model.state).toEqual(
      ScanState.Finished,
    );
  });
});
