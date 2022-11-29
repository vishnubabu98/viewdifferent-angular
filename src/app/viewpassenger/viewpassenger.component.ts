import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewpassenger',
  templateUrl: './viewpassenger.component.html',
  styleUrls: ['./viewpassenger.component.css']
})
export class ViewpassengerComponent {
  constructor(private api:ServiceService)
  {
    api.fetchPassenger().subscribe(
      (response)=>{
        this.pass=response
      }
    )
  }
  pass:any=[]
  

}
