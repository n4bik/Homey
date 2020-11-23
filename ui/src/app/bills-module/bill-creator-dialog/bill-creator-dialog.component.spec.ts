import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCreatorDialogComponent } from './bill-creator-dialog.component';

describe('BillCreatorDialogComponent', () => {
  let component: BillCreatorDialogComponent;
  let fixture: ComponentFixture<BillCreatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCreatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCreatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
