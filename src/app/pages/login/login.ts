import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm: FormGroup;

  constructor( private fb: FormBuilder, private _user: User, private _router: Router ){

    let controls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }

    this.loginForm = fb.group(controls);

  }

  login(){
    console.log(this.loginForm.value);
    this._user.signin( this.loginForm.value ).subscribe({
      next: (res: any)=>{
       
        localStorage.setItem('token', res.Token);
        
        this._router.navigate(['/dashboard']);

      },
      error: (err)=>{
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! please try again",
        });
        
      }
    })

  }
}
