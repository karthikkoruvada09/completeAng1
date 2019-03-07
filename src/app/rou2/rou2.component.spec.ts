import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rou2Component } from './rou2.component';

describe('Rou2Component', () => {
  let component: Rou2Component;
  let fixture: ComponentFixture<Rou2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rou2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rou2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
