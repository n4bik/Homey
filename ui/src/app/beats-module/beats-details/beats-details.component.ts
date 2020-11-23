import { Component, OnInit } from '@angular/core';
import {BeatsCrudService} from "../beats-crud.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-beats-details',
  templateUrl: './beats-details.component.html',
  styleUrls: ['./beats-details.component.scss']
})
export class BeatsDetailsComponent implements OnInit {
  beatsList;
  urlArray;
  beatsListSubscription: Subscription;
  beatId: number;

  constructor(private router: Router,
              private beatsCrudService : BeatsCrudService) {
  }

  ngOnInit() {
    this.urlArray = this.router.url.split('beatId=');
    this.beatId = parseInt(decodeURI(this.urlArray[1]).trim());
    this.beatsCrudService.getBeatsList();
    this.beatsListSubscription = this.beatsCrudService.beatsListChange
      .asObservable()
      .subscribe(
        (beatsList) => {
          this.beatsList = beatsList;
        }
      )
  }
}
