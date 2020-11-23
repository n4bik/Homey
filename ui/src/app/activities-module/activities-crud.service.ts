import { Injectable } from '@angular/core';
import {ActivitiesHttpService} from "./activities-http.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesCrudService {
  activitiesListChange = new Subject();
  notDoneCountChange = new Subject();

  private _notDoneCount : number;
  public activitiesList;
  private _count : number = 0;

  constructor(private activitiesHttpService: ActivitiesHttpService) { }

  getActivitiesList() {
    this.activitiesHttpService.getActivitiesList().subscribe(
      data => {
        this.activitiesList = data;
        this.activitiesListChange.next(this.activitiesList.slice());
        this._count = this.activitiesList.length;
      },
      error => console.log(error),
      () => {
        this.getNotDoneActivities();
      }
    );
  }

  private getNotDoneActivities() {
    this._notDoneCount = 0;

    this.notDoneCountChange.next(this._notDoneCount);

    for (let i = 0; i < this._count; i++) {
      if (this.activitiesList[i].done == false) {
        this._notDoneCount += 1;
        this.notDoneCountChange.next(this._notDoneCount);
      }
    }
  }

  deleteActivity(id: number) {
    this.activitiesHttpService.deleteActivity(id).subscribe(
      () => this.getActivitiesList()
    );
  }

  completeActivity(id: number) {
    this.activitiesHttpService.completeActivity(id).subscribe(
      () => this.getActivitiesList()
    )
  }
}
