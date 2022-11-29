import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})
export class ViewUserInfoComponent {
  constructor(private api:ServiceService)
  {
    api.fetchUserInfo().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]
  

}
