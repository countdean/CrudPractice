import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { FormModel } from './model/form';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit{


  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': "Bearer 1c3ade893719f375187bb1888fe44c7ad8d04f66f59e2c932fb6e7afc04b2fe2"
    })
  };

  fetchData: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getUser(){
    this.fetchData = this.http
     .get(
       'https://gorest.co.in/public/v2/users/'
     ).subscribe((res)=>{
      console.log("response", res)
     })
    //  console.log("response", response)
     // .pipe(map((users) => users || []));
    //  return response;
 }
 

  addUser(){

  }


}
