import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
  
  showStyle: boolean = false;

  constructor() { }

  getStyle() {
    if(this.showStyle){
      console.log('shown')
      return "green";
    } else {
      console.log('not shown')
      return "green";
    }
  }

  ngOnInit() {
  }

}
