import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CarsServiceService } from '../../service/cars-service.service';
import { setCookie } from '../utils';

@Component({
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {

  error: string;
  adminLoginForm: FormGroup;

  constructor(
    private carService: CarsServiceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  login(): any {
    let form = this.adminLoginForm.value;

    let admin = {
      email: form['email'],
      password: form['password']
    }

    this.carService.logInAdmin(admin).subscribe(res => {
      console.log(res);

      if (res['error']) {
        this.error = res['error'];
        setTimeout(() => { this.error = '' }, 4000);
      } else {
        this.error = '';
        // console.log(res['token'])

        let adminCookie = {
          email: res['email'],
          token: res['token'],
          id: res['user_id']
        }

        setCookie('admin', JSON.stringify(adminCookie), 1);

        // redirect to home page
        this.router.navigate(['/welcome'], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    this.adminLoginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

}
