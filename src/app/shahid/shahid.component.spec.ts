/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShahidComponent } from './shahid.component';

describe('ShahidComponent', () => {
  let component: ShahidComponent;
  let fixture: ComponentFixture<ShahidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShahidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShahidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
