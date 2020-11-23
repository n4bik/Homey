import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsDetailsEditComponent } from './beats-details-edit.component';

describe('BeatsDetailsEditComponent', () => {
  let component: BeatsDetailsEditComponent;
  let fixture: ComponentFixture<BeatsDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
