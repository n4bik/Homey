import {Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivitiesCrudService} from "../activities-crud.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";

@Component({
  selector: 'app-activities-list-display',
  templateUrl: './activities-list-display.component.html',
  styleUrls: ['./activities-list-display.component.scss']
})
export class ActivitiesListDisplayComponent implements OnInit {
  public activitiesList;
  subscription: Subscription;

  activitiesListSource = new MatTableDataSource();
  displayedColumns: string[] = [
      'activityName',
      'assignee',
      'dueDate',
      'completionDate',
      'done',
      'delete'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private activitiesCrudService : ActivitiesCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.activitiesCrudService.getActivitiesList();
    this.listSubscription();
  }

  private listSubscription() {
    this.subscription = this.activitiesCrudService.activitiesListChange
      .asObservable()
      .subscribe(
        (activitiesList) => {
          this.activitiesList = activitiesList;
          this.activitiesListSource = new MatTableDataSource(this.activitiesList);
          this.activitiesListSource.sort = this.sort;
        }
      )
  }

  public openDeleteDialog(id) {
    this.dialogOperationsService.openDeleteDialog(id);
  }

  public completeActivity(id) {
    this.activitiesCrudService.completeActivity(id);
    this.openSnackBar("Activity completed! Keep it up!");
  }

  openSnackBar(message: string) {
    this.snackbarService.openSnackBar(
      message,
      "",
      'hms-completed-activity-snackbar',
      1500,
      "top")
  }
}
