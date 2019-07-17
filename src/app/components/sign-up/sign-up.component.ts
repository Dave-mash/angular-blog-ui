import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { CarsServiceService } from '../../service/cars-service.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: string;
  userForm: FormGroup;

  constructor(
    private carService: CarsServiceService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  register(): any {
    console.log(this.userForm.value);
    let form = this.userForm.value;

    let user = {
      firstName: form['first-name'],
      lastName: form['last-name'],
      username: form['username'],
      email: form['email'],
      phoneNumber: form['phone-number'],
      password: form['password'],
      confirmPassword: form['confirmPassword']
    }

    this.carService.postUser(user).subscribe(res => {
      console.log(res);
      if (res['error']) {
        this.error = res['error'];
        setTimeout(() => { this.error = '' }, 4000);
      } else {
        this.error = '';
        
        // redirect to login page
        this.router.navigate([`${window.location.origin}/login`], { replaceUrl: true });
      }
    });
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      'first-name': ['', Validators.required],
      'last-name': ['', Validators.required],
      'username': ['', Validators.required],
      'email': ['', Validators.required],
      'phone-number': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm-password': ['', Validators.required]
    });
  }

}
