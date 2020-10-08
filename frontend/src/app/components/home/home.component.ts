import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image:string="assets/image/04-full.jpg";
  image1:string="assets/image/3.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
