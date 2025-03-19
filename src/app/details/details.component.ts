import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule], // Ensures common Angular directives are available
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Fixed incorrect property name
})
export class DetailsComponent {
  
route: ActivatedRoute = inject(ActivatedRoute);
housingService = inject(HousingService);
housingLocation: HousingLocation | undefined;
constructor() {
const housingLocationId = Number(this.route.snapshot.params['id']);
this.housingLocation =
this.housingService.getHousingLocationById(housingLocationId);
 }
}
