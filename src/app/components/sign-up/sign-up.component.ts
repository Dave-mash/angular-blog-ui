import { Component, OnInit } from '@angular/core';

import { CarsServiceService } from '../../service/cars-service.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private carService: CarsServiceService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(res => {
      // this.cars = res.data;
    });
  }

}
