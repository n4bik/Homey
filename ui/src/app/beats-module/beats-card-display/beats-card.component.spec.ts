import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsCardComponent } from './beats-card.component';

describe('BeatsCardDisplayComponent', () => {
  let component: BeatsCardComponent;
  let fixture: ComponentFixture<BeatsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
