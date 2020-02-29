import { Component, OnInit } from '@angular/core';

import {
  HttpClient, HttpRequest, HttpResponse, HttpEvent
} from '@angular/common/http';

import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  // https://github.com/ackerapple/angular-file#readme
  accept = '*';
  files: File[] = [];
  progress: number;
  url = 'https://jquery-file-upload.appspot.com/';
  hasBaseDropZoneOver: boolean = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;

  sendableFormData: FormData; // populated via ngfFormData directive

  dragFiles: any;
  validComboDrag: any;
  lastInvalids: any;
  fileDropDisabled: any;
  maxSize: any;
  baseDropValid: any;


  postUrl = '...';
  myFormData: FormData; // populated by ngfFormData directive
  // httpEvent: HttpEvent<{}>

  constructor(public httpClient: HttpClient) { }

  ngOnInit() { }

  uploadFiles(files: File[]): Subscription {
    const config = new HttpRequest('POST', this.postUrl, this.myFormData, {
      reportProgress: true
    });

    return this.httpClient.request(config)
      .subscribe(event => {
        this.httpEvent = event;

        if (event instanceof HttpResponse) {
          // alert('upload complete, old school alert used')
        }
      },
        error => {
          // alert('!failure beyond compare cause:' + error.toString())
        });
  }


  getDate() {
    return new Date();
  }

  clearProogress() {

    if (!this.files.length) {
      this.progress = 0;
    }
  }

}
