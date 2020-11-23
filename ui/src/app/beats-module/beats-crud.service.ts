import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BeatsHttpService} from "./beats-http.service";

@Injectable({
  providedIn: 'root'
})
export class BeatsCrudService {
  beatsListChange = new Subject();

  public beatsList;

  constructor(private beatsHttpService: BeatsHttpService) { }

  getBeatsList() {
    this.beatsHttpService.getBeatsList().subscribe(
      data => {
        this.beatsList = data;
        this.beatsListChange.next(this.beatsList.slice());
      },
      error => console.log(error),
      () => {}
    );
  }

  getBeatById(id: number) {
    return this.beatsHttpService.getBeatById(id);
  }

  deleteBeat(id: number) {
    this.beatsHttpService.deleteBeat(id).subscribe(
      () => this.getBeatsList()
    );
  }

  updateBeat(beat, id: number) {
    this.beatsHttpService.updateBeat(beat, id).subscribe(
      () => this.getBeatsList()
    )
  }
}
