import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviorments/enviorment';

@Injectable({
  providedIn: 'root'
})
export class Board {
url='http://127.0.0.1:3000/board/';
constructor(private http:HttpClient){ }
byid(id: any){
    return this.http.get(`${environment.apiUrl}/board/byid/${id}`);
  }

  update(id: any, data: any){
    return this.http.put(`${environment.apiUrl}/board/update/${id}`, data);
  }
  delete(id:any){
    return this.http.delete(`${environment.apiUrl}board/delete/${id}`);
    
  }
}
