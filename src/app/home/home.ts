import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import {Housinglocationinfo} from '../housinglocationinfo';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation], // include component here
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
housingLocation: Housinglocationinfo = {
id: 9999,
name: 'Test Home',
city: 'Test city',
state: 'ST',
photo: `${this.baseUrl}/example-house.jpg`,
availableUnits: 99,
wifi: true,
laundry: false,
}; } 
