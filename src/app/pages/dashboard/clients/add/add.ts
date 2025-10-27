import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Client } from '../../../../core/services/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
     image:any;
  selectimage(event:any)
  {
    this.image = event.target.files[0];
    console.log(this.image);
  }
  clientform:FormGroup;
  constructor(private fb:FormBuilder,private cl:Client,private router:Router){
    let controls={fullname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    tel:new FormControl('',[Validators.required,Validators.minLength(8)]),
    adress:new FormControl('',[Validators.required,Validators.minLength(10)])
  }
    this.clientform=this.fb.group(controls);
}
send()
{
let fd=new FormData();
fd.append('fullname',this.clientform.value.fullname);
fd.append('email',this.clientform.value.email);
fd.append('tel',this.clientform.value.tel);
fd.append('address',this.clientform.value.adress);
 if (this.image) {
    fd.append('image', this.image); // <-- specify filename
  }
this.cl.create(fd).subscribe({next:data=>{console.log(data),this.router.navigateByUrl('/dashboard/clients/list')},
error:(err)=>{console.log(err)}})
}
}
