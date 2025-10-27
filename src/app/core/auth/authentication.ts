import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
   constructor() { }

  isLoggedIn(){
    let token = !!localStorage.getItem('token');
   return token;
  }

  getDataFromToken(){
    let token = localStorage.getItem('token');
    if(token){
      return JSON.parse( window.atob( token.split('.')[1] ) )
    }
  }
}
