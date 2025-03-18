import {Component, inject} from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService} from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: HousingLocation[] = [];
  // Injecting HousingService into the Component
  housingService: HousingService = inject(HousingService);
  constructor(){
  //setting housingLocationlist to the data array in HousingService
  this.housingLocationList = this.housingService.getAllHousingLocations();
  }
  }
  