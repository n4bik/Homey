import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsDetailsComponent } from './beats-details.component';

describe('BeatsDetailsComponent', () => {
  let component: BeatsDetailsComponent;
  let fixture: ComponentFixture<BeatsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
