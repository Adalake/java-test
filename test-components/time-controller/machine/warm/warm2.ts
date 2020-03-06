import { Injectable } from '@angular/core';
import { WarmType, warmEnum } from './warm';
import { Subject } from 'rxjs';
import { WarmAction } from './warmAction';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WarmServiceTwo {
  private $action = new Subject<WarmType>();
  public action$ = this.$action.asObservable(); // asObservable()
  constructor() {}

  rungo(action: WarmType) {
    this.$action.next(action);
    console.log('two go', action);
  }
}
