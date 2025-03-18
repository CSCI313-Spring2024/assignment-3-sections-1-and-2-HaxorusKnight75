import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true, // Enables standalone component usage
  imports: [CommonModule], // Ensures common directives are available
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
