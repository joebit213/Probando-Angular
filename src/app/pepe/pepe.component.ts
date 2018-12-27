import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pepe',
  templateUrl: './pepe.component.html',
  styleUrls: ['./pepe.component.css']
})
export class PepeComponent implements OnInit {
  @Input() nameUser;
  constructor() { }

  ngOnInit() {
  }

}
