import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";
import {BillsHttpService} from "../bills-http.service";
import {BillsCrudService} from "../bills-crud.service";

@Component({
  selector: 'app-bill-creator-dialog',
  templateUrl: './bill-creator-dialog.component.html',
  styleUrls: ['./bill-creator-dialog.component.scss']
})
export class BillCreatorDialogComponent implements OnInit {
  newBillForm: FormGroup;
  assignees: string[] = [
    'Tomasz',
    'Vasylyna'
  ];
  billCategories: string[] = [
    'Apartment cost',
    'Shopping',
    'Food',
    'Drinks'
  ];

  constructor(private billsHttpService : BillsHttpService,
              private billsCrudService : BillsCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.newBillForm = new FormGroup({
      billName: new FormControl('',
        Validators.required),
      billCategory: new FormControl('',
        Validators.required),
      billValue: new FormControl('',
        Validators.required),
      dueDate: new FormControl('',
        Validators.required)
    });
  }

  submitBillForm() {
    if (this.newBillForm.valid) {
      this.billsHttpService.createBill(this.newBillForm.value).subscribe(
        () => {
          this.newBillForm.reset();
          this.closeCardAfterSubmission();
          return true;
        },
        error => {
          console.log(error);
          return false;
        }
      )
    } else {
      this.openSnackBar("Fill out the form, please.");
    }
  }

  closeCardAfterSubmission(){
    this.dialogOperationsService.closeCardAfterSubmission();
  }

  openSnackBar(message: string) {
    this.snackbarService.openSnackBar
    (message,
      "",
      'hms-card-dialog-snackbar',
      1500,
      "top")
  }

  cancelCard(){
    this.dialogOperationsService.cancelDialog();
  }
}
