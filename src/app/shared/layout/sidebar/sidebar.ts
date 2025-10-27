import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Authentication } from '../../../core/auth/authentication';


@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  user: any;

  constructor( private _auth: Authentication ){}

  ngOnInit(): void {
    this.user = this._auth.getDataFromToken();
  }

}
