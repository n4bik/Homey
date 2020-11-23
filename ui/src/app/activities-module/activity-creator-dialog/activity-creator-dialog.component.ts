import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivitiesHttpService} from "../activities-http.service";
import {ActivitiesCrudService} from "../activities-crud.service";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";

@Component({
  selector: 'app-card-creator',
  templateUrl: './activity-creator-dialog.component.html',
  styleUrls: ['./activity-creator-dialog.component.scss']
})
export class ActivityCreatorDialogComponent implements OnInit {
  activitiesNames: string[] = [
    'Kitchen cleaning',
    'Bathroom cleaning',
    'Bedroom cleaning',
    'Living room cleaning'
  ];
  assignees: string[] = [
    'Tomasz',
    'Vlasa',
    'Judy'
  ];
  newCardForm: FormGroup;

  constructor(private activitiesHttpService : ActivitiesHttpService,
              private activitiesCrudService : ActivitiesCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.newCardForm = new FormGroup({
      activityName: new FormControl('', Validators.required),
      assignee: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required)
    });
  }

  submitCardForm() {
    if (this.newCardForm.valid) {
      this.activitiesHttpService.createActivity(this.newCardForm.value).subscribe(
        () => {
          this.newCardForm.reset();
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

  cancelCard(){
    this.dialogOperationsService.cancelDialog();
  }

  openSnackBar(message: string) {
    this.snackbarService.openSnackBar
      (message,
      "",
      'hms-card-dialog-snackbar',
      1500,
      "top")
  }
}
