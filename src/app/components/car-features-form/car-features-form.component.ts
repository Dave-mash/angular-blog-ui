import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CarsServiceService } from 'src/app/service/cars-service.service';

@Component({
  selector: 'app-car-features-form',
  templateUrl: './car-features-form.component.html',
  styleUrls: ['./car-features-form.component.css']
})
export class CarFeaturesFormComponent implements OnInit {

  searchCarForm: FormGroup;
  error: string;
  models: any[];

  constructor(
    private carService: CarsServiceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  onBlurMake(value: string) {
    if (value) {
      this.carService.specifyCarType(value).subscribe(res => {

        this.models = res['Results'];
        console.log(this.models[0]['Model_Name']);
      });
    }
  }

  searchCar(): any {
    let form = this.searchCarForm.value;

    let car = {
      min: form['min'] ? form['min'] : 0,
      max: form['max'] ? form['max'] : 1000000000,
      condition: form['condition'] ? form['condition'] : 'new',
      make: form['make'] ? form['make'] : 'Toyota',
      model: form['model'] ? form['model'] : 'Corolla',
      color: form['color'] ? form['color'] : 'black'
    }

    this.carService.getFilteredCars(car).subscribe(res => {
      console.log(res);
      // res['status'] === 'ok' && this.router.navigate(['/car']);

      // if (res['error']) {
      //   this.error = res['error'];
      //   setTimeout(() => { this.error = '' }, 4000);
      // } else {
      //   this.error = '';
      // }
    });
  }

  ngOnInit() {
    this.searchCarForm = this.fb.group({
      'min': ['', Validators.required],
      'max': ['', Validators.required],
      'description': ['', Validators.required],
      'make': ['', Validators.required],
      'model': ['', Validators.required],
      'color': ['', Validators.required],
      'condition': ['', Validators.required]
    });
  }

}
