import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsTagsComponent } from './beats-tags.component';

describe('BeatsTagComponent', () => {
  let component: BeatsTagsComponent;
  let fixture: ComponentFixture<BeatsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
