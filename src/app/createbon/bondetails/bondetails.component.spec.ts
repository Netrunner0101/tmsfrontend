import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondetailsComponent } from './bondetails.component';

describe('BondetailsComponent', () => {
  let component: BondetailsComponent;
  let fixture: ComponentFixture<BondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BondetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
