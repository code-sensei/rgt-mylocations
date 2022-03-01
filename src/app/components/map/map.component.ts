import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Input('coordinates') coordinates: any;
  @ViewChild('mapElement') mapElement: any;

  map: any;

  constructor() {
  }

  addMarker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position: {
        lat,
        lng
      },
      map: this.map
    })
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.coordinates.lat, lng: this.coordinates.lng },
      zoom: 20
    })
    this.addMarker(this.coordinates.lat, this.coordinates.lng);
  }

}
