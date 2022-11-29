import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-user-data',
  templateUrl: './view-user-data.component.html',
  styleUrls: ['./view-user-data.component.css']
})
export class ViewUserDataComponent {
  constructor(private api:ServiceService)
  {
    api.fetchUserData().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}
