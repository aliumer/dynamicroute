/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ManojComponent } from './manoj.component';

describe('ManojComponent', () => {
  let component: ManojComponent;
  let fixture: ComponentFixture<ManojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
