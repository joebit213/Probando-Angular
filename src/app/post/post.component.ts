import { Component, OnInit, ViewChild, NgZone,  } from '@angular/core';
import { MapsAPILoader } from '@agm/core'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  latitude:number;
  longitude:number

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit()  {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
}

setCenter(e:any){
  e.preventDefault();
  this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
}

}


