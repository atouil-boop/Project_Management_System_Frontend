import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Breadcrumb } from '../../../../shared/components/breadcrumb/breadcrumb';
import { Project } from '../../../../core/services/project';
import { environment } from '../../../../../enviorments/enviorment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  imports: [RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
userUrl= `${environment.apiUrl}/userimages/`;
projectUrl= `${environment.apiUrl}/projectfiles/`;
contactUrl=`${environment.apiUrl}/contactimages/`;
projects : any;

  constructor( private _project: Project ){}

  ngOnInit(): void {
    this._project.list().subscribe({
      next: (res)=>{
        this.projects = res;
        console.log(this.projects);
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
       
        this._project.delete(id).subscribe({
          next:(res)=>{
            this.ngOnInit();
          }
        })

      }
    });
  }

}
