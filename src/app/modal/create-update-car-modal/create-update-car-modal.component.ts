import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../models/car-model/car.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../../services/car-service/car.service';

@Component({
  selector: 'app-create-update-car-modal',
  templateUrl: './create-update-car-modal.component.html',
  styleUrl: './create-update-car-modal.component.css'
})
export class CreateUpdateCarModalComponent implements OnInit {
  @Input() car?: Car; // Declare an input property to receive the car object
  statuses: string[] = ['Available', 'Reserved', 'Sold'];


  constructor(public activeModal: NgbActiveModal,
    private carService: CarService) {}

  ngOnInit(): void {
    
   }
  
  submitChanges(): void {
    this.updateCar(this.car!);
    };
  

  updateCar(car: Car) {
    this.carService.updateCar(car).subscribe({
      next: (updatedCar) => {
        this.car = updatedCar;
        console.log('Car updated successfully:', updatedCar);
        alert('Car updated successfully!')
      },
      error: (error) => {
        alert('Failed to update car: ' + error.message);
        console.error('Error updating car:', error);
      }
    });
  }
  
  createCar(car: Car) {
    this.carService.createCar(car).subscribe({
      next: (createdCar) => {
        this.car = createdCar;
        console.log('Car created successfully:', createdCar);
        alert('Car created successfully!')
      },
      error: (error) => {
        alert('Failed to update car: ' + error.message);
        console.error('Error updating car:', error);
      }
    });
  }
}