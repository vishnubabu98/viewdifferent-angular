import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-quotes-app',
  templateUrl: './view-quotes-app.component.html',
  styleUrls: ['./view-quotes-app.component.css']
})
export class ViewQuotesAppComponent {
  constructor(private api:ServiceService)
  {
    api.fetchData().subscribe(
      (response)=>{
        this.data=response
      }
    )
  } 
data:any=[]
}
