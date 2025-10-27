import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../enviorments/enviorment';
@Injectable({
  providedIn: 'root'
})
export class Client {
  url ='http://127.0.0.1:3000/client/';
  constructor(private http:HttpClient) { }
  create(client: any) {
    return this.http.post(`${environment.apiUrl}/client/create`, client);
  }

  list() {
    return this.http.get(`${environment.apiUrl}/client/list`);
  }

  byId(id: any) {
    return this.http.get(`${environment.apiUrl}/client/byid/${id}`);
  }

  delete(id: any) {
    return this.http.delete(`${environment.apiUrl}/client/delete/${id}`);
  }

  update(id: any, data: any) {
    return this.http.put(`${environment.apiUrl}/client/update/${id}`, data);
  }
  
}

