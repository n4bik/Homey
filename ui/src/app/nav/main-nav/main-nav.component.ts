import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivitiesCrudService} from "../../activities-module/activities-crud.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  subscription: Subscription;
  public _notDoneCount;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private activitiesCrudService : ActivitiesCrudService) {}

  subNotDoneCount() {
    this.subscription = this.activitiesCrudService.notDoneCountChange
      .asObservable()
      .subscribe(
        (_notDoneCount) => {
          this._notDoneCount = _notDoneCount;
        }
      )
  }

  getNotDoneCount() {
    this.subNotDoneCount();
    return this._notDoneCount != null ? this._notDoneCount : 0;
  }
}
