import { WarmServiceTwo } from './warm/warm2';

export class CTSMachine {
  readonly warmUp: WarmServiceTwo;

  constructor(children: { warmUp: WarmServiceTwo }) {
    this.warmUp = children.warmUp;
  }
}
