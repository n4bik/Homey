import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {DialogOperationsService} from "../../utils/dialog-operations.service";
import {SnackbarService} from "../../utils/snackbar-service/snackbar.service";
import {BeatsCrudService} from "../beats-crud.service";

@Component({
  selector: 'app-beats-card-display',
  templateUrl: './beats-card.component.html',
  styleUrls: ['./beats-card.component.scss']
})
export class BeatsCardComponent implements OnInit {
  beatsList;
  subscription: Subscription;

  constructor(private beatsCrudService : BeatsCrudService,
              private dialogOperationsService : DialogOperationsService,
              private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.beatsCrudService.getBeatsList();
    this.subscription = this.beatsCrudService.beatsListChange
      .asObservable()
      .subscribe(
        (beatsList) => {
          this.beatsList = beatsList;
        }
      )
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
