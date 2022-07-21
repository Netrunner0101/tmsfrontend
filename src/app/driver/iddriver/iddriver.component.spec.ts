import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IddriverComponent } from './iddriver.component';

describe('IddriverComponent', () => {
  let component: IddriverComponent;
  let fixture: ComponentFixture<IddriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IddriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IddriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
