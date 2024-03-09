import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    
   }

  // constructor(private modalService: NgbModal) {}
  // ngOnInit(): void {
    
  // }

  // openModal() {
  //   $(this.myModal.nativeElement).modal('show');
  // }

  // closeModal() {
  //   $(this.myModal.nativeElement).modal('hide');
  // }





}
