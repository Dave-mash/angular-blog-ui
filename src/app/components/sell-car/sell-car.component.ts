import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { CarsServiceService } from '../../service/cars-service.service';
import { getCookie } from '../utils';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {

  sellCarForm: FormGroup;
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

  sellCar(): any {
    let form = this.sellCarForm.value;

    let car = {
      price: form['price'],
      description: form['description'],
      condition: form['condition'],
      make: form['make'],
      model: form['model'],
      color: form['color']
    }

    console.log(car);

    let authenticatedUser = JSON.parse(getCookie('user'));

    !authenticatedUser && this.router.navigate(['/login'])

    this.carService.postCar(car, authenticatedUser).subscribe(res => {

      res['status'] === 'ok' && this.router.navigate(['/car']);

      if (res['error']) {
        this.error = res['error'];
        setTimeout(() => { this.error = '' }, 4000);
      } else {
        this.error = '';
        // console.log(res['token'])

        // let userCookie = {
        //   email: res['email'],
        //   token: res['token'],
        //   id: res['user_id']
        // }

        // setCookie('user', JSON.stringify(userCookie), 1);

        // redirect to home page
        // this.router.navigate(['/welcome'], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {

    this.sellCarForm = this.fb.group({
      'price': ['', Validators.required],
      'description': ['', Validators.required],
      'make': ['', Validators.required],
      'model': ['', Validators.required],
      'color': ['', Validators.required],
      'condition': ['', Validators.required]
    });


  }

}
