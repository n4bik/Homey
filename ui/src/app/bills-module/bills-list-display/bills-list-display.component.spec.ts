import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsListDisplayComponent } from './bills-list-display.component';

describe('BillsListDisplayComponent', () => {
  let component: BillsListDisplayComponent;
  let fixture: ComponentFixture<BillsListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
