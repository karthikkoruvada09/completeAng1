import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENDPOINTSParametrsComponent } from './endpoints-parametrs.component';

describe('ENDPOINTSParametrsComponent', () => {
  let component: ENDPOINTSParametrsComponent;
  let fixture: ComponentFixture<ENDPOINTSParametrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ENDPOINTSParametrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ENDPOINTSParametrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
