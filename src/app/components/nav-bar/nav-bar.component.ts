import { Component, OnInit } from '@angular/core';
import { getCookie } from '../utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedUser: {} = getCookie('user');
  loggedAdmin: {} = getCookie('admin');

  constructor() { }

  ngOnInit() {
    console.log(!this.loggedUser);
  }

}
