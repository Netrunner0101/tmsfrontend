import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtransporterComponent } from './newtransporter.component';

describe('NewtransporterComponent', () => {
  let component: NewtransporterComponent;
  let fixture: ComponentFixture<NewtransporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtransporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
