import { Component, OnInit } from '@angular/core';
import {ActivitiesCrudService} from "../../activities-module/activities-crud.service";
import {DialogOperationsService} from "../dialog-operations.service";
import {BillsCrudService} from "../../bills-module/bills-crud.service";
import {Router} from "@angular/router";
import {BeatsCrudService} from "../../beats-module/beats-crud.service";

@Component({
  selector: 'app-delete-dialog-confirmation',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {
  public itemId;

  constructor(private activitiesCrudService : ActivitiesCrudService,
              private billsCrudService : BillsCrudService,
              private beatsCrudService : BeatsCrudService,
              private dialogOperationsService : DialogOperationsService,
              private router: Router) { }

  ngOnInit() {
    this.itemId = this.dialogOperationsService.itemId;
  }

  public deleteItem() {
    if(this.router.url === "/bills"){
      this.billsCrudService.deleteBill(this.itemId);
    } else if (this.router.url === "/activities") {
      this.activitiesCrudService.deleteActivity(this.itemId);
    } else if (this.router.url === "/beats") {
      this.beatsCrudService.deleteBeat(this.itemId);
    }

    this.dialogOperationsService.closeCardAfterSubmission();
  }

  cancelDialog(){
    this.dialogOperationsService.cancelDialog();
  }
}
