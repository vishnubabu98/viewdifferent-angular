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
  fetchtodo=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }
  fetchUserData=()=>{
    return this.http.get("https://dummyjson.com/users")
  }
  fetchUserInfo=()=>{
    return this.http.get("https://reqres.in/api/users?page=1")
  }
  fetchPassenger=()=>{
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30. ")
  }
  fetchUsData=()=>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }
}
