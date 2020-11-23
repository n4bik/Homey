import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";
import {BillsCrudService} from "../bills-crud.service";

@Component({
  selector: 'app-bills-list-display',
  templateUrl: './bills-list-display.component.html',
  styleUrls: ['./bills-list-display.component.scss']
})
export class BillsListDisplayComponent implements OnInit {
  public billsList;
  public totalValue;
  subscription: Subscription;

  billsListSource = new MatTableDataSource();
  displayedColumns: string[] = ['billName', 'billCategory', 'billValue', 'dueDate', 'pay', 'delete'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private billsCrudService : BillsCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.billsCrudService.getBillsList();
    this.updateListSubscription();
  }

  private updateListSubscription() {
    this.subscription = this.billsCrudService.billsListChange
      .subscribe(
        (billsList) => {
                  this.billsList = billsList;
                  this.billsListSource = new MatTableDataSource(this.billsList);
                  this.sort.sort({id: 'dueDate', start: 'asc', disableClear: false});
                  this.billsListSource.sort = this.sort;
        }
      )
  }

  public openDeleteDialog(id) {
    this.dialogOperationsService.openDeleteDialog(id);
  }

  public payBill(id) {
    this.billsCrudService.payBill(id);
    this.openSnackBar("Bill payed! Keep it up!");
  }

  private openSnackBar(message: string) {
    this.snackbarService.openSnackBar
      (message,
      "",
      'hms-completed-activity-snackbar',
      1500,
      "top")
  }

  private getTotalValue() {
    return this.billsList
      .map(bill => bill.billValue)
      .reduce((acc, value) => acc + value, 0)
  }
}
