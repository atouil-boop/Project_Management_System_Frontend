import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,FormControl,Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../../core/services/client';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
  
  image: any;
  prevImage: any;
  id: any;
  clientform : FormGroup;
  constructor(
    private fb: FormBuilder,
    private _act: ActivatedRoute,
    private _client: Client,
    private _router: Router
  ){
    let controls = {
      fullname : new FormControl('', [ Validators.required ]),
      email : new FormControl('', [ Validators.required ]),
      tel : new FormControl('', [ Validators.required ]),
      address : new FormControl('', [ Validators.required ]),
    }

    this.clientform = this.fb.group(controls);
  }

  selectImage(e: any){
    this.image = e.target.files[0];
  }

  ngOnInit(): void {
    
    this.id = this._act.snapshot.paramMap.get('id');
    console.log(this.id);

    this._client.byId(this.id).subscribe({
      next: (res: any)=>{
        console.log(res);
        this.clientform.patchValue({fullname : res.fullname,
                                    email:res.email,
                                    tel :res.tel,
                                    address:res.address
                                  })
        this.prevImage = res.image;
      }
    })

  }


  send(){

    let fd = new FormData();
    fd.append('fullname', this.clientform.value.fullname);
    fd.append('email', this.clientform.value.email);
    fd.append('tel', this.clientform.value.tel);
    fd.append('address', this.clientform.value.address);
    if(this.image){
      fd.append('image', this.image);
    }

    this._client.update(this.id, fd).subscribe({
      next: (res)=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your client has been saved",
          showConfirmButton: false,
          timer: 1500
        });

        this._router.navigate(['/dashboard/clients/list'])

      }
    })

  }

}
