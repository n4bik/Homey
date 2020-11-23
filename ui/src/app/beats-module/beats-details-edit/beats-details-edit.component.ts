import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {BeatsCrudService} from "../beats-crud.service";
import {FormBuilder} from "@angular/forms";
import {BeatDetails} from "../../data/BeatDetails";
import {FileUploadService} from "../../utils/file-upload-component/file-upload-service.service";

@Component({
  selector: 'app-beats-details-edit',
  templateUrl: './beats-details-edit.component.html',
  styleUrls: ['./beats-details-edit.component.scss']
})
export class BeatsDetailsEditComponent implements OnInit {
  beatDetailsTitle = 'Edit Beat Details';
  filesManagementTitle = 'Files Management';
  beatstarsConfigTitle = 'BeatStars Configuration';
  youtubeConfigTitle = 'YouTube Configuration';
  soundcloudConfigTitle = 'SoundCloud Configuration';
  facebookConfigTitle = 'Facebook Configuration';

  beatDetails: BeatDetails = {
    id: null,
    beatName: null,
    description: null,
    creatorFirstName: null,
    creatorLastName: null,
    releaseDate: null,
    publishDate: null,
    squareCoverGfxUrl: null,
    youtubeThumbnailGfxUrl: null,
    mp3TaggedUrl: null,
    mp3UntaggedUrl: null,
    wavTaggedUrl: null,
    wavUntaggedUrl: null
  }
  beatsList;
  urlArray;
  beatsListSubscription: Subscription;
  beatId: number;
  beatDetailsForm;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private beatsCrudService : BeatsCrudService,
              private fileUploadService : FileUploadService) {
    this.beatsCrudService.getBeatsList();
    this.beatsListSubscription = this.beatsCrudService.beatsListChange
      .asObservable()
      .subscribe((beatsList) => this.beatsList = beatsList);
    this.beatDetailsForm = this.formBuilder.group(this.beatDetails);
  }

  ngOnInit() {
    this.urlArray = this.router.url.split('beatId=');
    this.beatId = parseInt(decodeURI(this.urlArray[1]).trim());
  }

  submit(beatDetailsChange) {
    const beatIndexAfterFilter = 0;
    const beatDetailsOriginal = this.beatsCrudService.beatsList
      .filter(beat => this.beatId === beat.id)[beatIndexAfterFilter];

    this.beatsCrudService.updateBeat(beatDetailsChange, beatDetailsOriginal.id);
  }

  downloadBeatByName(formatType: string) {
    const beatIndexAfterFilter = 0;
    const beatDetails = this.beatsCrudService.beatsList
      .filter(beat => this.beatId === beat.id)[beatIndexAfterFilter];

    return this.fileUploadService.downloadBeat(beatDetails.beatName, formatType);
  }

  delete(formatType: string) {
    this.beatsCrudService.getBeatsList();
    const beatIndexAfterFilter = 0;
    const beatDetails = this.beatsCrudService.beatsList
      .filter(beat => this.beatId === beat.id)[beatIndexAfterFilter];

    this.fileUploadService
      .delete(beatDetails.beatName, formatType)
      .then();
  }
}
