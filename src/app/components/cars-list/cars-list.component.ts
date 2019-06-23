import { Component, OnInit } from '@angular/core';
import { ICar } from './car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  pageTitle: string = 'Cars List';
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
    },
    {
      "make": "Mazda",
      "model": "Demio",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "color": "Blue",
      "condition": "old",
      "price": 2200000,
      "rating": 4.0,
      "thumbnail": "toyota.jpg"
    }
  ];
  filteredCars: ICar[];
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCars = this.listFilter ? this.performFilter(this.listFilter) : this.cars;
  }

  constructor() {
    this.filteredCars = this.cars;
    this.listFilter = 'Toyota';
  }

  performFilter(filterBy: string): ICar[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cars.filter((car: ICar) => 
      car.make.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit() {
  }

}
