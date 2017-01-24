/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CampSpotComponent } from './camp-spot.component';

describe('CampSpotComponent', () => {
  let component: CampSpotComponent;
  let fixture: ComponentFixture<CampSpotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampSpotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
