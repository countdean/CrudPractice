import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { UserDetails } from './model/form';
import { map } from 'rxjs/operators'
import { Observable, Subscription } from 'rxjs';
import { FormGroup, FormBuilder, FormGroupDirective, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formUser!: FormGroup;
  userDetails$: Subscription;
  userDetails: any = [];

  // fetchData: Subscription;

  constructor(private http: HttpClient,
    public formService: FormService, 
    public formBuilder: FormBuilder,) {
      
      this.formUser = this.formBuilder.group
      ({
        email: ['', Validators.required],
        name: ['', Validators.required],
        gender: ['', Validators.required],
        status: ['', Validators.required],
      });
     }
  // ngOnDestroy(): void {
   
  // }

  ngOnInit(): void {
    this.formService.getUser().subscribe(res => {
      this.userDetails = res;
      console.log(res);
    })
   
    
  }

addUser(userForm: FormGroupDirective){
  const formData: UserDetails = this.formUser.value
  console.log("=====", formData)
  this.formService.createUser({
    email: formData.email,
    name: formData.name,
    gender: formData.gender,
    status: formData.status,
  })
  // console.log("aaaaaa", this.formUser)
  // alert("Added Task Successfully!")
    userForm.resetForm()
}


}

