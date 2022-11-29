import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  fetchCourses=()=>{
    return this.http.get("https://dummyjson.com/products")
  }
  fetchData=()=>{
    return this.http.get("https://dummyjson.com/quotes")
  }

}
