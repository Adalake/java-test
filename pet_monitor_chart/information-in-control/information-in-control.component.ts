import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, bufferTime, scan } from 'rxjs/operators';
interface TimeStampedData {
  data: number,
  time: number
}
@Component({
  selector: 'app-information-in-control',
  templateUrl: './information-in-control.component.html',
  styleUrls: ['./information-in-control.component.less'],
})
export class InformationInControlComponent implements OnInit {
  @Output() toggleDevelopMessage = new EventEmitter();

   bufferTime: number = 1000 * 120;
   signalTime: number = 1000;
   $source: Observable<number> = interval(this.signalTime).pipe(map(() => Math.round(Math.random() * (490-10) + 10)));
  $timeStamped:Observable<TimeStampedData> = this.$source.pipe(map(x => ({ data: x, time: Date.now() })));
  
   isInBuffer:Function = (x: TimeStampedData) => Date.now() - x.time < this.bufferTime;
   removeOutdated:Function = (xs: TimeStampedData[]) => xs.filter((v) =>this.isInBuffer(v));
  
   $singleScanSource = this.$timeStamped.pipe(
    scan<TimeStampedData, TimeStampedData[]>(
      (prev, curr) => [...this.removeOutdated(prev), curr], []), map(val => val.map(x => x.data))
  );
  $buffered= this.$timeStamped.pipe(
          scan<TimeStampedData, TimeStampedData[]>(
            (acc, x) => [...this.removeOutdated(acc), x],
            [] as TimeStampedData[],
          ),
          map((xs) => xs.map((x) => x.data)),
        );
  constructor() {}
  ngOnInit() {}
  onToggleDevelopMessage() {
    this.toggleDevelopMessage.emit();
  }
}
