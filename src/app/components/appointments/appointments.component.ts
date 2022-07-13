import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Appointments } from 'src/app/models/appointments';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent implements OnInit {

  @Input() appointment: Appointments [] = [];

  @Output() status = new EventEmitter<string>();

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {    
  }

  open(appointment:Appointments) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.appointment = appointment;
    modalRef.closed.subscribe((res) => {
      if(res == "delete"){
        this.status.emit("reload")
      }
    });
  }
}
