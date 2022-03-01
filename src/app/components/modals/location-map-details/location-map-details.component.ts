import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DEFAULT_LATLNG, DEFAULT_LOCATION } from 'src/app/utils/defaults';
import { LatLng, Location } from 'src/app/utils/types';

@Component({
  selector: 'app-location-map-details',
  templateUrl: './location-map-details.component.html',
  styleUrls: ['./location-map-details.component.scss']
})
export class LocationMapDetailsComponent implements OnInit, AfterViewInit {

  @Input('location') location: Location = DEFAULT_LOCATION;
  
  locationLatLng: any;

  constructor() {
  }

  ngOnInit(): void {
    this.locationLatLng = {
      lat: Number(this.location.coordinates.split(',')[0]),
      lng: Number(this.location.coordinates.split(',')[1])
    }
  }

  ngAfterViewInit(): void {
  }

}
