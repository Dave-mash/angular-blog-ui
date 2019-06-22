import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarFeaturesFormComponent } from './components/car-features-form/car-features-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarsListComponent,
    CarFeaturesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
