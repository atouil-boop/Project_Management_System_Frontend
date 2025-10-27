import { Component } from '@angular/core';
import { Header } from '../../shared/layout/header/header';
import { Footer } from '../../shared/layout/footer/footer';
import { Sidebar } from '../../shared/layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports: [Header,Footer,Sidebar,RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
