import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TscSec1Component } from './tsc-sec1.component';

describe('TscSec1Component', () => {
  let component: TscSec1Component;
  let fixture: ComponentFixture<TscSec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TscSec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TscSec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
