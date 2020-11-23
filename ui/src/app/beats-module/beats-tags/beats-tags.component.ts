import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

export interface BeatTags {
  name: string;
}

@Component({
  selector: 'app-beats-tags',
  templateUrl: './beats-tags.component.html',
  styleUrls: ['./beats-tags.component.scss']
})
export class BeatsTagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  beatTags: BeatTags[] = [
    {name: 'rap'},
    {name: 'hiphop'},
    {name: 'trap'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our beat tag
    if ((value || '').trim()) {
      this.beatTags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(beatTag: BeatTags): void {
    const index = this.beatTags.indexOf(beatTag);

    if (index >= 0) {
      this.beatTags.splice(index, 1);
    }
  }
}

