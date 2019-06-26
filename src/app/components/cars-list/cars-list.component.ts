import { Component, OnInit } from '@angular/core';
import { ICar } from './car';

@Component({
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
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
    if (!this.filteredCars) console.log('empty');
  }

  set sortBy(value: string) {
    console.log(value);
    switch (value) {
      case 'make':
        this.sortByLetters(this.cars, 'make');
        break;
      case 'model':
        this.sortByLetters(this.cars, 'model');        
        break;
      case 'max-price':
        this.cars.sort((a, b) => b.price - a.price);
        break;
      case 'min-price':
        this.cars.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        this.cars.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  constructor() {
    this.filteredCars = this.cars;
    this.listFilter = '';
  }

  performFilter(filterBy: string): ICar[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.cars.filter((car: ICar) => 
      car.make.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  sortByLetters(arr: any[], value: string) {
    arr.sort((a, b) => {
      let nameA = value === 'make' ? a.make.toUpperCase() : a.model.toUpperCase();
      let nameB = value === 'make' ? b.make.toUpperCase() : b.model.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    
      return 0;
    });
  }

  ngOnInit() {
  }

}
