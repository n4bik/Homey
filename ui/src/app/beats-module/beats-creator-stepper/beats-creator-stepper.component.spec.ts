import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsCreatorStepperComponent } from './beats-creator-stepper.component';

describe('BeatsCreatorStepperComponent', () => {
  let component: BeatsCreatorStepperComponent;
  let fixture: ComponentFixture<BeatsCreatorStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsCreatorStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsCreatorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
