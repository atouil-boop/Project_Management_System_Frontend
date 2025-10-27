import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Client } from '../../../core/services/client';
import { Project } from '../../../core/services/project';
import { User } from '../../../core/services/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-statistics',
  standalone:true,
  imports: [CommonModule,NgxChartsModule],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics {

  clients: any;
  projects: any;
  users: any;

  // chart1 options

  saleData = [

    { name: "projects", value: 0 },
    { name: "users", value: 0 },
    { name: "clients", value: 0 }
    
  ];

  lineChartData = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2013",
          "value": 940000
        },
        {
          "name": "2014",
          "value": 128940000
        }
      ]
    }
  ]

  constructor( private _client: Client, private _project: Project, private _user: User ){}

  ngOnInit(): void {
    
    this.getAllClients();
    this.getAllProjects();
    this.getAllUsers();

  }

  getAllUsers(){
    this._user.list().subscribe({
      next: (res)=>{
        this.users = res;
        this.saleData[1].value = this.users.length;
      }
    })
  }

  getAllProjects(){
    this._project.list().subscribe({
      next: (res)=>{
        this.projects = res;
        this.saleData[0].value = this.projects.length;
      }
    })
  }

  getAllClients(){
    this._client.list().subscribe({
      next: (res)=>{
        this.clients = res;
        this.saleData[2].value = this.clients.length
      }
    })
  }

}
