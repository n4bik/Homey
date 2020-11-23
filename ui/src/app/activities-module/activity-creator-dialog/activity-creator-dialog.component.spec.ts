import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCreatorDialogComponent } from './activity-creator-dialog.component';

describe('CardCreatorComponent', () => {
  let component: ActivityCreatorDialogComponent;
  let fixture: ComponentFixture<ActivityCreatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCreatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
