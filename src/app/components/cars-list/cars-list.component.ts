import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Observable } from 'rxjs';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent implements OnInit {

  cars?: Car[];
  currentCar: Car = {};
  currentIndex = -1;
  make = '';


  constructor(
    private carService: CarService
  ) { }

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

  searchByMake(): void {
    this.currentCar = {};
    this.currentIndex = -1;

    this.carService.getAllCarsByMake(this.make).subscribe({
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
  
}
