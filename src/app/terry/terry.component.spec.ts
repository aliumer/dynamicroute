/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TerryComponent } from './terry.component';

describe('TerryComponent', () => {
  let component: TerryComponent;
  let fixture: ComponentFixture<TerryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
