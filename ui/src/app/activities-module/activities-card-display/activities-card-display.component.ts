import { Component, OnInit } from '@angular/core';
import {ActivitiesCrudService} from "../activities-crud.service";
import {Subscription} from "rxjs";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";

@Component({
  selector: 'app-activities-card-display',
  templateUrl: './activities-card-display.component.html',
  styleUrls: ['./activities-card-display.component.scss']
})
export class ActivitiesCardDisplayComponent implements OnInit {
  public activitiesList;
  subscription: Subscription;

  constructor(private activitiesCrudService : ActivitiesCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.activitiesCrudService.getActivitiesList();
    this.subscription = this.activitiesCrudService.activitiesListChange
      .asObservable()
      .subscribe(
        (activitiesList) => {
          this.activitiesList = activitiesList;
        }
      )
  }

  public completeActivity(id) {
    this.activitiesCrudService.completeActivity(id);
    this.openSnackBar("Activity completed! Keep it up!");
  }

  public openDeleteDialog(id) {
    this.dialogOperationsService.openDeleteDialog(id);
  }

  openSnackBar(message: string) {
    this.snackbarService.openSnackBar
    (message,
      "",
      'hms-completed-activity-snackbar',
      1500,
      "top")
  }
}
