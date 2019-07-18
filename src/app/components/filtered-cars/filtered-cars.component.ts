import { Component, OnInit } from '@angular/core';
import { ICar } from '../cars-list/car';

@Component({
  selector: 'app-filtered-cars',
  templateUrl: './filtered-cars.component.html',
  styleUrls: ['./filtered-cars.component.css']
})
export class FilteredCarsComponent implements OnInit {

  cars: ICar[] = [
    {
      color: "LightSeaGreen",
      condition: "new",
      description: "Qui sed aspernatur aut veritatis voluptate. Quaerat illo aut vero incidunt. Nobis ipsum ut beatae qui veniam asperiores.",
      make: "Toyota",
      model: "Corolla",
      thumbnail: "toyota.jpg",
      rating: 4,
      price: 6686193
    },
    {
      color: "LightSeaGreen",
      condition: "new",
      description: "Qui sed aspernatur aut veritatis voluptate. Quaerat illo aut vero incidunt. Nobis ipsum ut beatae qui veniam asperiores.",
      make: "Toyota",
      model: "Corolla",
      thumbnail: "toyota.jpg",
      rating: 3,
      price: 6586193
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
