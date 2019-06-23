import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  pageTitle: string = 'Cars List';
  cars: any[] = [
    {
      "make": "Toyota",
      "model": "Hilux",
      "color": "silver",
      "condition": "new",
      "price": "ksh.2,000,000",
      "rating": 4.2
    },
    {
      "make": "Nissan",
      "model": "Sunny",
      "color": "black",
      "condition": "new",
      "price": "ksh.1,500,000",
      "rating": 3.5
    },
    {
      "make": "Mazda",
      "model": "Demio",
      "color": "Blue",
      "condition": "old",
      "price": "ksh.2,200,000",
      "rating": 4.0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
