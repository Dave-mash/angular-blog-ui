import { Component, OnInit } from '@angular/core';

import { CarsServiceService } from '../../service/cars-service.service';
import { ICar } from './car';

@Component({
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars;

  filteredCars: ICar[];
  carsLoaded; // for the loading spinner
  
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

  constructor(private carService: CarsServiceService) { }

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
    this.listFilter = '';
    this.carsLoaded = false;
    this.carService.getCars().subscribe(res => {
      this.cars = res; 
      // pop a loading spinner
      this.filteredCars = this.cars;
      // hide the loading spinner
      this.carsLoaded = true;
      console.log(this.filteredCars);
    });
  }

}
