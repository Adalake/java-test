import { Injectable } from '@angular/core';
import { CarlibrationService } from './calibration/calibration';
import { WarmService } from './warm/warm';
import { WarmServiceTwo } from './warm/warm2';
import { WarmAction } from './warm/warmAction';
import { CTSEventMachine } from 'src/app/machine/model/cts-event';
import { CTSMachine } from './ctsMachine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  constructor(private warmServiceTwo: WarmServiceTwo) {}
  public readonly ctsMachine = {
    warm: new WarmService(),
    carlibration: new CarlibrationService(),
    wamTwo: new WarmServiceTwo()
    // warmAction: new WarmAction(this.warmServiceTwo)
  };
  public readonly ctsTestMachine = new CTSMachine({
    warmUp: this.warmServiceTwo
  });
}
