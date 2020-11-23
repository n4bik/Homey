import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesListDisplayComponent } from './activities-list-display.component';

describe('ActivitiesListDisplayComponent', () => {
  let component: ActivitiesListDisplayComponent;
  let fixture: ComponentFixture<ActivitiesListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
