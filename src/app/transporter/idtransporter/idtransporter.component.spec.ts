import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdtransporterComponent } from './idtransporter.component';

describe('IdtransporterComponent', () => {
  let component: IdtransporterComponent;
  let fixture: ComponentFixture<IdtransporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdtransporterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdtransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
