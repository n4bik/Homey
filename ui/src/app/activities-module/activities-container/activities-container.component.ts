import {Component, OnInit} from '@angular/core';
import {ActivityCreatorDialogComponent} from "../activity-creator-dialog/activity-creator-dialog.component";
import {DialogOperationsService} from "../../utils/dialog-operations.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities-container.component.html',
  styleUrls: ['./activities-container.component.scss']
})
export class ActivitiesContainerComponent implements OnInit {
  checked = false;

  constructor(private dialogOperationsService : DialogOperationsService) {
  }

  ngOnInit() {
  }

  public openDialog() {
    this.dialogOperationsService.openDialog(ActivityCreatorDialogComponent, "440px", "400px");
  }

  changed(){
    return this.checked;
  }
}
