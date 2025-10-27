import { Component } from '@angular/core';
import { Project } from '../../../../core/services/project';
import { ActivatedRoute } from '@angular/router';
import { Kanban } from "./kanban/kanban";
import { environment } from '../../../../../enviorments/enviorment';

@Component({
  selector: 'app-preview',
  imports: [Kanban],
  templateUrl: './preview.html',
  styleUrl: './preview.css'
})
export class Preview {
  userUrl= `${environment.apiUrl}/userimages/`;
  projectUrl= `${environment.apiUrl}/projectfiles/`;
  contactUrl=`${environment.apiUrl}/contactimages/`;
 project: any;
  id: any;
  constructor(private _act: ActivatedRoute, private _project: Project){}

  ngOnInit(): void {
    this.id = this._act.snapshot.paramMap.get('id');

    this._project.preview(this.id).subscribe({
      next: (res)=>{
        this.project = res;
        console.log(res);
        
      }
    })
  }

}
