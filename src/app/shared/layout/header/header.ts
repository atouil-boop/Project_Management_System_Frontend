import { Component } from '@angular/core';
import { Authentication } from '../../../core/auth/authentication';
import { User } from '../../../core/services/user';
import { environment } from '../../../../enviorments/enviorment';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  imageUrl= `${environment.apiUrl}/userimages/`;

  user: any;

  constructor( private _auth: Authentication,private _user :User ){}

  ngOnInit(): void {
    this.user = this._user.byid(this._auth.getDataFromToken()._id).subscribe({
    next: (res) => {
      console.log('Fetched user:', res);
      this.user = res;
    },
    error: (err) => {
      console.error('Error fetching user by ID:', err);
    }
  });

    
  }

  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }
}
