import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  profile?: Profile;

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProfile();
  }

getProfile(){
  this.apiService.getProfile(2).subscribe((res:Profile)=>{
    this.profile = res;
  });
}

}
