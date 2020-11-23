import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ActivitiesHttpService {

  constructor(private http: HttpClient) { }

  getActivitiesList() {
    return this.http.get('/server/api/v1/activities');
  }

  getActivityById(id: number){
    return this.http.get('/server/api/v1/activities/' + id);
  }

  createActivity(activity){
    let body = JSON.stringify(activity);
    return this.http.post('/server/api/v1/activities', body, httpOptions);
  }

  deleteActivity(id: number){
    return this.http.delete('/server/api/v1/activities/' + id);
  }

  completeActivity(id: number){
    return this.http.put('/server/api/v1/activities/' + id, httpOptions)
  }
}
