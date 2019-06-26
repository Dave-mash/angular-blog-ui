import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CarFeaturesFormComponent } from './components/car-features-form/car-features-form.component';
import { CarSliderComponent } from './components/car-slider/car-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AdminLogInComponent } from './components/admin-log-in/admin-log-in.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarsListComponent,
    CarFeaturesFormComponent,
    CarSliderComponent,
    FooterComponent,
    CarDetailsComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    SignUpComponent,
    LogInComponent,
    AdminLogInComponent,
    SellCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'all-cars', component: CarsListComponent },
      { path: 'car', component: CarDetailsComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'login', component: LogInComponent },
      { path: 'sell', component: SellCarComponent },
      { path: 'admin-login', component: AdminLogInComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ],
    { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
