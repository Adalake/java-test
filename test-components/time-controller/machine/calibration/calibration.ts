import { Injectable } from '@angular/core';

export enum CaliEnum {
  CarliFast = 'CarliFast',
  CarliWater = 'CarliWater'
}

export interface CarliFast {
  _typename: CaliEnum.CarliFast;
}

export interface CaliWater {
  _typename: CaliEnum.CarliWater;
}

export type CaliType = CarliFast | CaliWater;

@Injectable({
  providedIn: 'root'
})
export class CarlibrationService {
  run(action: CaliType) {
    if (action._typename === CaliEnum.CarliFast) {
      console.log('mock run to ' + action._typename);
    } else {
      console.log('mock run to ' + action._typename);
    }
  }
}
