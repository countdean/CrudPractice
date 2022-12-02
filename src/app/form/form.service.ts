import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { UserDetails } from './model/form';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Form } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit, OnDestroy{


  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': "Bearer 1c3ade893719f375187bb1888fe44c7ad8d04f66f59e2c932fb6e7afc04b2fe2"
    })
  };

  fetchData: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  getUser() {
    this.fetchData = this.http
     .get(
       'https://gorest.co.in/public/v2/users'
     );
    
     return this.fetchData
    //  console.log("response", response)
     // .pipe(map((users) => users || []));
    //  return response;
 }

//   getUser(){
//     this.fetchData = this.http
//      .get(
//        'https://gorest.co.in/public/v2/users/'
//      ).subscribe((res)=>{
//       console.log("response", res)
//      })
//  }

//  createUser(user: FormModel): Observable<FormModel> {
//   return this.http.post<FormModel>('https://gorest.co.in/public/v2/users/', user, this.httpOptions)
//     .pipe(
//       catchError(this.handleError('addUser', user))
//     );
// }


createUser(user: UserDetails) {
  console.log("=====", user)
  return this.http.post<UserDetails>('https://gorest.co.in/public/v2/users', user, this.httpOptions).subscribe((response)=>{
    // console.log("======",response)
  })
    
}


  // handleError(arg0: string, hero: any): (err: any, caught: Observable<FormModel | import("@angular/common/http").HttpEvent<FormModel>>) => import("rxjs").ObservableInput<any> {
  //   throw new Error('Method not implemented.');
  // }

//  addUser(){
//   this.http.add('https://gorest.co.in/public/v2/users/').subscribe((res)=>{
//     console.log("response", res)
//    })
//   //  console.log("response", response)
//    // .pipe(map((users) => users || []));
//   //  return response;
// }


}
