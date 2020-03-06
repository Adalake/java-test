import { WarmServiceTwo } from './warm2';
import { map, filter } from 'rxjs/operators';
import { warmEnum } from './warm';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarmAction {
  constructor(private warmServiceTwo: WarmServiceTwo) {
    this.warmServiceTwo.action$
      .pipe(filter(x => x._typename === warmEnum.EndWarm))
      .subscribe(m => this.runGo(m));
    //   .subscribe(x => console.log('???'));
    console.log('construct go');
  }
  //   runAction(warmServiceTwo: WarmServiceTwo) {
  //     warmServiceTwo.action$
  //       .pipe(filter(x => x._typename === warmEnum.EndWarm))
  //       .subscribe(m => this.runGo(m));
  //   }
  runGo(m: any) {
    console.log(m, +'from observable');
    console.log('run go');
  }
}
