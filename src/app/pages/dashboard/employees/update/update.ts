import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../core/services/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
  userForm: FormGroup;
  image: any;
  tags : any = [];
  singleTag = '';

  id: any;

  constructor( 
    private fb: FormBuilder, 
    private _act: ActivatedRoute,
    private _user: User,
    private _router: Router
  ){

    let controls = {
      fullname: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required ]),
      tel: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [])
    }

    this.userForm = fb.group(controls);
  }

  ngOnInit(): void {
    
    this.id = this._act.snapshot.paramMap.get('id');

    this._user.byid(this.id).subscribe({
     next: (res: any)=>{
      console.log(res);
      this.userForm.reset(res);
      this.tags = res.tags;
     } 
    })
  }

  createTag(){
    this.tags.push(this.singleTag);
    this.singleTag = '';
  }

  deleteTag(index: number){
    this.tags.splice(index, 1)
  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }

  save(){

    let fd = new FormData();
    fd.append('fullname', this.userForm.value.fullname);
    fd.append('email', this.userForm.value.email);
    fd.append('tel', this.userForm.value.tel);
    fd.append('tags', JSON.stringify(this.tags));
    if(this.image){
      fd.append('images', this.image);
    }
  if (this.userForm.value.password && this.userForm.value.password.length > 0) {
  fd.append('password', this.userForm.value.password);
}

    this._user.update(this.id, fd).subscribe({
      next: (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your user has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this._router.navigate(['/dashboard/employees/list'])
      }
    })

  }
}
