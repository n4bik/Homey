import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BillsHttpService {

  constructor(private http: HttpClient) { }

  getBillsList() {
    return this.http.get('/server/api/v1/bills');
  }

  getBillById(id: number){
    return this.http.get('/server/api/v1/bills/' + id);
  }

  createBill(bill){
    let body = JSON.stringify(bill);
    return this.http.post('/server/api/v1/bills', body, httpOptions);
  }

  deleteBillById(id: number){
    return this.http.delete('/server/api/v1/bills/' + id);
  }

  payBill(id: number){
    return this.http.put('/server/api/v1/bills/' + id, httpOptions)
  }
}
