// export interface WarmAction {
//   StartWarm: 'StartWarm';
//   EndWarm: 'EndWarm';
// } // 不好在下面的runn()里判断

// export class WarmService {
//   run(action: string) {
//     if (action === 'EndWarm') {
//       console.log('mock run to endWarm' + action);
//     } else {
//       console.log('mock run to StartWarm' + action);
//     }
//   }
// }
import { Injectable } from '@angular/core';

// export namespace warm { // 加命名空间是为了后期区分
export enum warmEnum { // 为了在构造对象时作为typename的值
  StartWarm = 'StartWarm',
  EndWarm = 'EndWarm'
}
// }

export interface WarmActionStart {
  //   _typename: 'StartWarm';
  // 有了enum后可以改为如下：
  _typename: warmEnum.StartWarm;
}

export interface WarmActionEnd {
  //   _typename: 'EndWarm';
  // 有了enum后可以改为如下：
  _typename: warmEnum.EndWarm;
}

export type WarmType = WarmActionStart | WarmActionEnd;

@Injectable({
  providedIn: 'root'
}) // 不加全局注入的话打印不出来run()
export class WarmService {
  run(action: WarmType) {
    // if (action._typename === 'EndWarm') { // 有了enum后这里也可修改为如下：
    if (action._typename === warmEnum.EndWarm) {
      console.log('mock run to  ' + action._typename);
    } else {
      console.log('mock run to ' + action._typename);
    }
  }
}

// 1. 2组事务，4个按钮，1种方法（run方法）
// 2. 从每个warmup.ts层做成全局单例  ==》 通过流 调用每个 warmup.ts 层的orun方法 (为什么这样设计)
// 因为还要对点击事件做处理，所以用了流《比如switchMap，比如说预热的话，点2次按钮就不会发送2次相同请求的http》 （如果源 observable 发出速度⾜够快的 话， switchMap 可以取消请求。）
// 3. 2组事务，4个按钮，2种方法（run方法和dispatch方法）
// 4. 很多种事务 组织
