import { Component, OnInit } from '@angular/core';
import { getCookie } from '../utils';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    console.log(JSON.parse(getCookie('user')));
  }

}
