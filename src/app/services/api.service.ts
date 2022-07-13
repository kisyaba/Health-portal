import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointments } from '../models/appointments';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private profile = environment.profile
  private appointments = environment.appointments

  constructor( private http: HttpClient) { }

  getProfile(id:number){
    return this.http.get<Profile>(this.profile + "/" + id)
  }

  getAppointment(id:number){
    return this.http.get<Appointments>(this.appointments + "/" + id)
  }

  getAppointments(){
    return this.http.get<Appointments[]>(this.appointments)
  }

  deleteAppointment(id:number){
    return this.http.delete(this.appointments + "/" + id)
  }
}
 