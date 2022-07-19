import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryidComponent } from './deliveryid.component';

describe('DeliveryidComponent', () => {
  let component: DeliveryidComponent;
  let fixture: ComponentFixture<DeliveryidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
