import { Component, Input } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true, // Enables standalone component usage
  imports: [RouterModule, RouterLink, RouterOutlet], // Ensures common directives are available
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'] // Fixed incorrect property name
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}
