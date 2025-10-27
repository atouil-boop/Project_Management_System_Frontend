import { Component, Input, } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css'
})
export class Breadcrumb {
  @Input() title :string ='';
  @Input() url :string='';

}
