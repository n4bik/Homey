import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar : MatSnackBar) { }

  openSnackBar(message: string, action: string, panelClass: string, duration: number, verticalPosition: MatSnackBarVerticalPosition) {
    let config = new MatSnackBarConfig();
    config.panelClass = panelClass; //['hms-card-dialog-snackbar'];
    config.duration = duration; //1500;
    config.verticalPosition = verticalPosition; //"top";

    this._snackBar.open(message, action, config);
  }
}
