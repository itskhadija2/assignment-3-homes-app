import { Component } from '@angular/core';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [HomeComponent]  // <-- tell Angular about HomeComponent
})
export class App {}
