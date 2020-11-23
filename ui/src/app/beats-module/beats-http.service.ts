import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = "/server/api/v1/";

@Injectable()
export class BeatsHttpService {

  constructor(private http: HttpClient) { }

  getBeatsList() {
    return this.http.get(baseUrl + 'beats');
  }

  getBeatById(id: number){
    return this.http.get(baseUrl + 'beats/' + id);
  }

  createBeat(beat){
    let body = JSON.stringify(beat);
    return this.http.post(baseUrl + 'beats', body, httpOptions);
  }

  updateBeat(beat, id:number){
    let body = JSON.stringify(beat);
    return this.http.patch(baseUrl + 'beats/' + id, body, httpOptions)
  }

  deleteBeat(id: number){
    return this.http.delete(baseUrl + 'beats/' + id);
  }
}
