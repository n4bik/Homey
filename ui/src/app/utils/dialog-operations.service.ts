import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ActivitiesCrudService} from "../activities-module/activities-crud.service";
import {DeleteConfirmationDialogComponent} from "./delete-confirmation-dialog/delete-confirmation-dialog.component";
import {BillsCrudService} from "../bills-module/bills-crud.service";
import {Router} from "@angular/router";
import {BeatsCrudService} from "../beats-module/beats-crud.service";

@Injectable({
  providedIn: 'root'
})
export class DialogOperationsService {
  public itemId;

  constructor(private activitiesCrudService : ActivitiesCrudService,
              private billsCrudService : BillsCrudService,
              private beatsCrudService : BeatsCrudService,
              public dialog: MatDialog,
              private router: Router) { }

  public openDialog(componentName, height : string, width : string): void {
    this.dialog.open(componentName, {
      height: height,
      width: width
    });
  }

  public openDeleteDialog(id) {
    this.openDialog(
      DeleteConfirmationDialogComponent,
      '220px',
      '450px');
    this.itemId = id;
  }

  public cancelDialog() : void {
    this.dialog.closeAll();
  }

  public closeCardAfterSubmission() : void {
    this.dialog.closeAll();
    if (this.router.url === "/bills") {
      this.billsCrudService.getBillsList();
    } else if (this.router.url === "/activities") {
      this.activitiesCrudService.getActivitiesList();
    } else if (this.router.url === "/beats") {
      this.beatsCrudService.getBeatsList();
    }

  }
}
