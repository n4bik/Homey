import { Component, OnInit } from '@angular/core';
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {BillCreatorDialogComponent} from "../bill-creator-dialog/bill-creator-dialog.component";

@Component({
  selector: 'app-bills',
  templateUrl: './bills-container.component.html',
  styleUrls: ['./bills-container.component.scss']
})
export class BillsContainerComponent implements OnInit {

  constructor(private dialogOperationsService : DialogOperationsService) { }

  ngOnInit() {
  }

  public openDialog() {
    this.dialogOperationsService.openDialog(BillCreatorDialogComponent, "540px", "500px");
  }

}
