import { Component, OnInit } from '@angular/core';
import { Appointments } from 'src/app/models/appointments';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.sass']
})
export class AppointmentsComponent implements OnInit {

appointment: Appointments [] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(){
    this.apiService.getAppointments().subscribe((res:Appointments[])=>{
      this.appointment.push(...res);
    });
  }

  getStatus(event:any){
    this.appointment = [];
    this.getAppointments();
  }
}
