import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  carForm: FormGroup;

  carModel: Car = {
    make: '',
    model: '',
    productionYear: 0
  }

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder
  ) {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      productionYear: ['', Validators.required]
    });
  }

  createCar() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      this.carService.addCar(formData).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.error(error)
        ,
        complete: () => (console.info('complete'))
      });
      console.log(formData);
      // Your logic to save the tutorial goes here
    } else {
      // Handle form validation errors if needed
    }
  }


}
