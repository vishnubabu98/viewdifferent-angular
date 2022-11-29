import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private api:ServiceService)
  {
    api.fetchCourses().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}
