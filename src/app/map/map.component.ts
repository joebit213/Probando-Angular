import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitude: number = 19.3912668;
  longitude: number = 99.1511504;

  ngOnInit() {
  }

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.longitude;
  
  }

}
