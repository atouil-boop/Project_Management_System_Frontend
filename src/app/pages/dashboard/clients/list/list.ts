import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Client } from '../../../../core/services/client';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { environment } from '../../../../../enviorments/enviorment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  imports: [RouterModule,CommonModule,Breadcrumb],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  imageUrl = `${environment.apiUrl}/contactimages/` ;
  table:any ;
constructor(private cl:Client){}
trackById(index: number, item: any): string {
  return item._id;
}
ngOnInit(): void {
  this.cl.list().subscribe({
    next: data => {
      console.log('TABLE DATA:', data); // <-- add this
      this.table = data;
    },
    error: err => { console.log(err); }
  });
}
// }
//  ngOnInit():void {
//   this.cl.list().subscribe({next:data=>{console.log(data);this.table=data; console.log(this.table); console.log(this.table[0].fullname)},
// error:(err)=>{console.log(err)}})

// }
delete(id: any){

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.cl.delete(id).subscribe({
          next: (res)=>{
              this.ngOnInit();
          }
        })
       
      }
    });

  }
}
