import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component:DashboardComponent, children:[ 
  {path: '', redirectTo:'profile', pathMatch:"full"},
  {path: 'profile', loadChildren:()=>import('../profile/profile.module').then(m=>m.ProfileModule)},
  {path: 'appointments', loadChildren:()=>import('../appointments/appointments.module').then(m=>m.AppointmentsModule)},
  {path: '**', redirectTo:'profile', pathMatch:"full"}
  ]},
  {path: '**', redirectTo:'', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
