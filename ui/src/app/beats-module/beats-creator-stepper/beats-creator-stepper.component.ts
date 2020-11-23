import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {BeatsHttpService} from "../beats-http.service";
import {BeatsCrudService} from "../beats-crud.service";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";

@Component({
  selector: 'app-beats-creator-stepper',
  templateUrl: './beats-creator-stepper.component.html',
  styleUrls: ['./beats-creator-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class BeatsCreatorStepperComponent implements OnInit {

  firstStepBeatDetailsFormGroup: FormGroup;
  secondStepBeatDetailsFormGroup: FormGroup;
  mergedBeatDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private beatsHttpService : BeatsHttpService,
              private beatsCrudService : BeatsCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) {}

  ngOnInit() {
    this.firstStepBeatDetailsFormGroup = this.formBuilder.group({
      creatorFirstName: ['', Validators.required],
      creatorLastName: ['', Validators.required]
    });
    this.secondStepBeatDetailsFormGroup = this.formBuilder.group({
      beatName: ['', Validators.required],
      description: ['']
    });
  }

  submitBeatForm() {
    this.mergedBeatDetailsForm = new FormGroup({
      creatorFirstName:this.firstStepBeatDetailsFormGroup.controls.creatorFirstName,
      creatorLastName:this.firstStepBeatDetailsFormGroup.controls.creatorLastName,
      beatName: this.secondStepBeatDetailsFormGroup.controls.beatName,
      description: this.secondStepBeatDetailsFormGroup.controls.description
    });

    if (this.mergedBeatDetailsForm.valid) {
      this.beatsHttpService.createBeat(this.mergedBeatDetailsForm.value).subscribe(
        () => {
          this.mergedBeatDetailsForm.reset();
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
}
