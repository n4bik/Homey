import {Component, Input, OnInit} from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {BeatsCrudService} from "../beats-crud.service";
import {FileUploadService} from "../../utils/file-upload-component/file-upload-service.service";

@Component({
  selector: 'app-beats-file-upload-component',
  templateUrl: './beats-file-upload.component.html',
  styleUrls: ['./beats-file-upload.component.scss']
})
export class BeatsFileUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = 'Upload a file';
  beatIdFromUrl;
  beat;
  @Input() formatType;

  constructor ( private fileUploadService: FileUploadService,
                private beatsCrudService: BeatsCrudService,
                private router: Router ) {}

  ngOnInit() {
    const urlArray = this.router.url.split('beatId=');
    this.beatIdFromUrl = parseInt(decodeURI(urlArray[1]).trim());
    this.loadBeatData();
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadFileWithNameAndFormat(this.beat.beatName, this.formatType);

    this.selectedFiles = undefined;
  }

  private loadBeatData() {
    this.beatsCrudService
      .getBeatById(this.beatIdFromUrl)
      .subscribe((data) => this.beat = data);
  }

  private uploadFileWithNameAndFormat(folderName, formatType) {
    this.fileUploadService.upload(this.currentFile, folderName, formatType).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.currentFile = undefined;
        }
      },
      err => {
        this.progress = 0;
        if (err.status === 406) {
          this.message = err.error.message;
        } else {
          this.message = 'Could not upload the file!';
        }
        this.currentFile = undefined;
      });
  }

  // delete(filename: string, formatType: string) {
  //   this.fileUploadService
  //     .delete(filename, formatType)
  //     .then(() => this.message = 'File deleted')
  // }
}
