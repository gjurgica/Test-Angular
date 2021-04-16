import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Validators,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  invalidCredentionals= false;
  check : any;
  constructor(private userApi:UserService,private fb: FormBuilder,private router: Router) {  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
     this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }
  isValidInput(fieldName:any): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
 }
 login(): void {
  this.check =this.userApi.users.find((user:any) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password);
  if(this.check !== undefined){
    localStorage.setItem("userId", this.check.id.toString());
    setTimeout(() =>{
      this.router.navigate(['/task']);
    }, 2000);
    }
  else{
    setTimeout(() =>{
      this.invalidCredentionals = true;
    }, 2000);
    }
  }
}
