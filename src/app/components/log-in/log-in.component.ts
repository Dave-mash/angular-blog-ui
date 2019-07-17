import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { CarsServiceService } from '../../service/cars-service.service';
import { setCookie } from '../utils';

@Component({
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  error: string;
  loginForm: FormGroup;

  constructor(
    private carService: CarsServiceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  login(): any {
    let form = this.loginForm.value;

    let user = {
      email: form['email'],
      password: form['password']
    }

    this.carService.logInUser(user).subscribe(res => {
      console.log(res);

      if (res['error']) {
        this.error = res['error'];
        setTimeout(() => { this.error = '' }, 4000);
      } else {
        this.error = '';
        // console.log(res['token'])

        let userCookie = {
          email: res['email'],
          token: res['token'],
          id: res['user_id']
        }

        setCookie('user', JSON.stringify(userCookie), 1);

        // redirect to home page
        this.router.navigate(['/welcome'], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

}
