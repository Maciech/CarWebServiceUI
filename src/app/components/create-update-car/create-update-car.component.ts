import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator

@Component({
  selector: 'app-create-update-car',
  templateUrl: './create-update-car.component.html',
  styleUrl: './create-update-car.component.css'
})
export class CreateUpdateCarComponent {

  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;

  constructor(private carService: CarService) {}

  cars?: Car[];
  currentCar: Car = {};
  carId = 0;
  editCar?: Car;

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
    
    this.carService.getCarById(carId).subscribe({
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

  public closeModal() {
    this.dialog.nativeElement.close();
    this.dialog.nativeElement.classList.remove('opened');
  }

  public openModal() {
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.classList.add('opened');
  }

  ngAfterViewInit() {
    this.dialog.nativeElement.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as Element;
      if (target.nodeName === 'DIALOG') {
        this.closeModal();
      }
    });
  }

  
  
}
