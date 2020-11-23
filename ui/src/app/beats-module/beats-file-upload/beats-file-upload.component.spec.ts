import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsFileUploadComponent } from './beats-file-upload.component';

describe('FileUploadComponentComponent', () => {
  let component: BeatsFileUploadComponent;
  let fixture: ComponentFixture<BeatsFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatsFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatsFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
