import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/app/utils/types';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit, AfterViewInit {

  @Input('location') location: Location = {
    name: '',
    address: '',
    category: {
      name: ''
    },
    coordinates: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
