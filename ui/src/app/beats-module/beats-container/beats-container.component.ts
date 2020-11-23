import { Component, OnInit } from '@angular/core';
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {BeatsCreatorStepperComponent} from "../beats-creator-stepper/beats-creator-stepper.component";

@Component({
  selector: 'app-beats',
  templateUrl: './beats-container.component.html',
  styleUrls: ['./beats-container.component.scss']
})
export class BeatsContainerComponent implements OnInit {

  constructor(private dialogOperationsService : DialogOperationsService) {
  }

  ngOnInit() {
  }

  openDialog() {
    this.dialogOperationsService.openDialog(BeatsCreatorStepperComponent, "500px", "800px");
  }
}
