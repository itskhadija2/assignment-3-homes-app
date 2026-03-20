import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation], // include component here
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}