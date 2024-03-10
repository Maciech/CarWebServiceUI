import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateUpdateCarComponent } from './components/create-update-car/create-update-car.component';
import { CreateUpdateCarModalComponent } from './modal/create-update-car-modal/create-update-car-modal.component';
import { CarDetailsModalComponent } from './modal/car-details-modal/car-details-modal.component';
import { ReservationDetailsModalComponent } from './modal/reservation-details-modal/reservation-details-modal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationModalComponent } from './modal/registration-modal/registration-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarsListComponent,
    DashboardComponent,
    CreateReservationComponent,
    SellCarComponent,
    LoginComponent,
    CreateUpdateCarComponent,
    CreateUpdateCarModalComponent,
    CarDetailsModalComponent,
    ReservationDetailsModalComponent,
    AdminDashboardComponent,
    ContactComponent,
    RegistrationModalComponent
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
