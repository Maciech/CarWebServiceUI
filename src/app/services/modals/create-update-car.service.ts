import { Injectable } from '@angular/core';
import { Car } from '../../models/car.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateCarService {

  constructor(private modalService: NgbModal) {}

  openEditCarModal(car: Car) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.car = car;
  }
}
