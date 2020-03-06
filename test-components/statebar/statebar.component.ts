import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statebar',
  templateUrl: './statebar.component.html',
  styleUrls: ['./statebar.component.less']
})
export class StatebarComponent implements OnInit {
  constructor() {}

  gender: string = 'test from_statebar';
  currentStorage = 80;
  ngOnInit() {}
}
