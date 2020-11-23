import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BillsHttpService} from "./bills-http.service";

@Injectable({
  providedIn: 'root'
})
export class BillsCrudService {
  billsListChange = new Subject();
  notPayedBillsCountChange = new Subject();

  private _notPayedBillsCount : number;
  public billsList;
  private _count : number = 0;

  constructor(private billsHttpService: BillsHttpService) { }

  getBillsList() {
    this.billsHttpService.getBillsList().subscribe(
      data => {
        this.billsList = data;
        this._count = this.billsList.length;
        this.updateBillsListChangeSubscription();
      },
      error => console.log(error),
      () => {
        this.getNotPayedBillsCount();
      }
    );
  }

  private updateBillsListChangeSubscription() {
    this.billsListChange.asObservable();
    this.billsListChange.next(this.billsList.slice());
  }

  private getNotPayedBillsCount() {
    this._notPayedBillsCount = 0;

    for (let i = 0; i < this._count; i++) {
      if (this.billsList[i].payed == false) {
        this._notPayedBillsCount += 1;
        this.notPayedBillsCountChange.next(this._notPayedBillsCount);
      }
    }
  }

  deleteBill(id: number) {
    this.billsHttpService.deleteBillById(id).subscribe(
      () => this.getBillsList()
    );
  }

  payBill(id: number) {
    this.billsHttpService.payBill(id).subscribe(
      () => this.getBillsList()
    )
  }
}
