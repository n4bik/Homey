import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:8080/api/v1/beats';

  constructor(private http: HttpClient) { }

  upload(file: File, beatName, formatType: string): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('beatName', beatName);
    formData.append('formatType', formatType);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  downloadBeat(beatName: string, formatType: string): string {
    return String(`${this.baseUrl}/files?beatName=${beatName}&formatType=${formatType}`);
  }

  delete(beatName: string, formatType: string) {
    const url = `${this.baseUrl}/files?beatName=${beatName}&formatType=${formatType}`;
    return this.http.delete(url)
      .toPromise()
      .then(null);
  }
}
