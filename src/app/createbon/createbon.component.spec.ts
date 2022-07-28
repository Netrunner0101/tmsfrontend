import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebonComponent } from './createbon.component';

describe('CreatebonComponent', () => {
  let component: CreatebonComponent;
  let fixture: ComponentFixture<CreatebonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatebonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
