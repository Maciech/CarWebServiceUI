import { Component, OnInit } from '@angular/core';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { HttpErrorResponse } from '@angular/common/http';

import { AddCarComponent } from '../add-car/add-car.component';
import { CreateUpdateCarService } from '../../services/modals/create-update-car.service';



@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrl: './create-reservation.component.css'
})
export class CreateReservationComponent implements OnInit {

  cars?: Car[];
  currentCar: Car = {};
  carId = 0;
  editCar?: Car;

  constructor(private carService: CarService,
    private createUpdateModalService: CreateUpdateCarService) { }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getAllCars().subscribe({
      next: (data) => {
        this.cars = data;
        console.log(data);
      },
      error: (error) => {
        alert(error.message);
        console.log(error);
      },
      complete: () => (console.info('complete'))
    })
  }

  searchById(carId: number): void {
    this.searchById(carId);
  }
  
  createUpdateCar(car: Car) {
    this.createUpdateModalService.openEditCarModal(car);
  }
  
  }




