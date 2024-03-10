import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'cars', component: CarsListComponent },
  { path: 'add', component: AddCarComponent },
  { path: 'reservations', component: CreateReservationComponent },
  { path: 'selling', component: SellCarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
