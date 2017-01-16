/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrabhuComponent } from './prabhu.component';

describe('PrabhuComponent', () => {
  let component: PrabhuComponent;
  let fixture: ComponentFixture<PrabhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrabhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrabhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
