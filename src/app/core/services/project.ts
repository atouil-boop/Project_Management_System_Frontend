import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviorments/enviorment';
@Injectable({
  providedIn: 'root'
})
export class Project {
  url='http://127.0.0.1:3000/project/';
  constructor(private http:HttpClient){ }
  create(data: any) {
    return this.http.post(`${environment.apiUrl}/project/create`, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${environment.apiUrl}/project/update/${id}`, data);
  }

  list() {
    return this.http.get(`${environment.apiUrl}/project/list`);
  }

  byid(id: any) {
    return this.http.get(`${environment.apiUrl}/project/byid/${id}`);
  }

  delete(id: any) {
    return this.http.delete(`${environment.apiUrl}/project/delete/${id}`);
  }

  preview(id: any) {
    return this.http.get(`${environment.apiUrl}/project/preview/${id}`);
  }
  
}
