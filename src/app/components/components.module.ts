import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './appointments/modal/modal.component';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    AppointmentsComponent,
    NavbarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
    
  ],
  exports: [
    ProfileComponent,
    AppointmentsComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
