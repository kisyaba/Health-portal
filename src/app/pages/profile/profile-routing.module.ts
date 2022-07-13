import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {path: '', component:ProfileComponent, pathMatch:'full'},
  {path: '**', redirectTo:'', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }