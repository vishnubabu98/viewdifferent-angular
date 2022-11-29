import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-viewusdata',
  templateUrl: './viewusdata.component.html',
  styleUrls: ['./viewusdata.component.css']
})
export class ViewusdataComponent {
  constructor(private api:ServiceService)
  {
    api.fetchUsData().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]

}
