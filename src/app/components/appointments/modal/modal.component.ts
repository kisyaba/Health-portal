import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Appointments } from 'src/app/models/appointments';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() appointment: any;

  constructor(public activeModal: NgbActiveModal, private apiService: ApiService) {}

  ngOnInit(): void {
  }

  delete(id:number){
    this.apiService.deleteAppointment(id).toPromise().then(()=>{
      this.activeModal.close("delete");
    }).catch(err=>console.log(err.message));
  }
}
