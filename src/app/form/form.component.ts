import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { FormModel } from './model/form';
import { map } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  fetchData: Subscription;
  formService: FormService;

  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
    this.fetchData
  }

  ngOnInit(): void {
    console.log(this.formService)
  }

//   getUser(){
//     this.fetchData = this.http
//      .get(
//        'https://gorest.co.in/public/v2/users/'
//      ).subscribe((res)=>{
//       console.log("response", res)
//      })
//     //  console.log("response", response)
//      // .pipe(map((users) => users || []));
//     //  return response;
//  }

 


}
function switchMap(arg0: () => void): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

