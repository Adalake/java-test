/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InformationInControlComponent } from './information-in-control.component';

describe('InformationInControlComponent', () => {
  let component: InformationInControlComponent;
  let fixture: ComponentFixture<InformationInControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationInControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationInControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
