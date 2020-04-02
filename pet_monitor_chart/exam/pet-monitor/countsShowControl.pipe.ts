import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countsShowControl',
  pure: false
})
export class CountsShowControlPipe implements PipeTransform {

  transform(value: number,max:number): number | string {
    if (value > max)
      return max + '+';
    return value;
  }


}
