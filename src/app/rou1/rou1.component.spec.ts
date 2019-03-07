import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rou1Component } from './rou1.component';

describe('Rou1Component', () => {
  let component: Rou1Component;
  let fixture: ComponentFixture<Rou1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rou1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rou1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
