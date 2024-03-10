import { Injectable } from '@angular/core';
import { Car } from '../../models/car-model/car.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUpdateCarModalComponent } from '../../modal/create-update-car-modal/create-update-car-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateCarService {

  constructor(private modalService: NgbModal) {}

  openEditCarModal(car: Car) {
    const modalRef = this.modalService.open(CreateUpdateCarModalComponent);
    modalRef.componentInstance.car = car;
  }
}
