import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.css']
})
export class ViewToDoComponent {
  constructor(private api:ServiceService)
  {
    api.fetchtodo().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}
