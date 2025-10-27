import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { User } from '../../../../core/services/user';
import { environment } from '../../../../../enviorments/enviorment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  standalone :true,
  imports: [RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
 imageUrl= `${environment.apiUrl}/userimages/`;
 employers : any ;

  constructor( private _user: User ){}


  ngOnInit(): void {
    
    this._user.list().subscribe({
      next: (res)=>{
        this.employers = res;
      }
    })

  }

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
       
        this._user.delete(id).subscribe({
          next:(res)=>{
            this.ngOnInit();
            window.location.reload();
          },
          error: (err)=>{
            console.log(err);
            
          }
        })

      }
    });
  }
}
