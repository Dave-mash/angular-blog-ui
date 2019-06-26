import { Component, OnInit } from '@angular/core';
import { ICar } from '../cars-list/car';

@Component({
  selector: 'app-admin-cars',
  templateUrl: './admin-cars.component.html',
  styleUrls: ['./admin-cars.component.css']
})
export class AdminCarsComponent implements OnInit {
  cars: ICar[] = [
    {
      "make": "Toyota",
      "model": "Hilux",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "color": "silver",
      "condition": "new",
      "price": 2000000,
      "rating": 4.2,
      "thumbnail": "asphalt.jpg"
    },
    {
      "make": "Nissan",
      "model": "Sunny",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "color": "black",
      "condition": "new",
      "price": 1500000,
      "rating": 3.5,
      "thumbnail": "automobile.jpg"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
