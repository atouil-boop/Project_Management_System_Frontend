import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviorments/enviorment';
@Injectable({
  providedIn: 'root'
})
export class User {
  url='http://127.0.0.1:3000/user/';
  constructor(private http:HttpClient){ }
  create(data: any) {
    return this.http.post(`${environment.apiUrl}/user/create`, data);
  }

  signin(data: any) {
    return this.http.post(`${environment.apiUrl}/user/signin`, data);
  }

  list(){
    return this.http.get(`${environment.apiUrl}/user/list`);
  }

  byid(id: any){
    return this.http.get(`${environment.apiUrl}/user/byid/${id}`);
  }

  delete(id: any){
    return this.http.delete(`${environment.apiUrl}/user/delete/${id}`);
  }

  update(id: any, data: any){
    return this.http.put(`${environment.apiUrl}/user/update/${id}`, data);
  }
  
}
