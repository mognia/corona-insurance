import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDemandComponent } from './pay-demand.component';

describe('PayDemandComponent', () => {
  let component: PayDemandComponent;
  let fixture: ComponentFixture<PayDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
