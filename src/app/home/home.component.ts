import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected property name
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  // Use constructor-based dependency injection for clarity and testability.
  constructor(private housingService: HousingService) {
    // Set the housing location list from the service.
    this.housingLocationList = this.housingService.getAllHousingLocations();
    // Initialize the filtered list.
    this.filteredLocationList = this.housingLocationList;
  }

  // Filters the housing locations based on the provided text.
  filterResults(text: string): void {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(housingLocation =>
      housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
