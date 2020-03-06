import { Injectable } from '@angular/core';
import { WarmServiceTwo } from './warm/warm2';
import { WarmAction } from './warm/warmAction';

@Injectable({
  providedIn: 'root'
})
export class MachineActionService {
  // constructor(private warmServiceTwo: WarmServiceTwo) {}
  // warmUpService = new WarmAction(this.warmServiceTwo);
}
