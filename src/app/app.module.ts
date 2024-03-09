import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CreateUpdateCarComponent } from './components/create-update-car/create-update-car.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarDetailsComponent,
    CarsListComponent,
    DashboardComponent,
    CreateReservationComponent,
    SellCarComponent,
    LoginComponent,
    CreateUpdateCarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
