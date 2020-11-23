import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesCardDisplayComponent } from './activities-card-display.component';

describe('ActivitiesCardDisplayComponent', () => {
  let component: ActivitiesCardDisplayComponent;
  let fixture: ComponentFixture<ActivitiesCardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesCardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
