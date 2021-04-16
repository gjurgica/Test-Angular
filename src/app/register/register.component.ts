import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Validators,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {UserModel} from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  invalidEmail= false;
  constructor(private userApi:UserService,private fb: FormBuilder,private router: Router) { }
  initForm(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    });
  }
  isValidInput(fieldName:any): boolean {
    return this.registerForm.controls[fieldName].invalid &&
      (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched);
  }
  register(): void {
    setTimeout(() =>{
        let email =this.userApi.users.find((user:any) => user.email === this.registerForm.value.email);
        let lastObject = this.userApi.users[this.userApi.users.length - 1];
        let newid =lastObject.id+1;
        if(email !== undefined){
          this.invalidEmail = true;
        }
        else{
          let newUser = new UserModel(newid,this.registerForm.value.email,this.registerForm.value.password);
          this.router.navigate(['/task']);
          this.userApi.users.push(newUser);
          localStorage.setItem("userId", newUser.id.toString());
          localStorage.setItem("users",JSON.stringify(this.userApi.users));
        }
      }, 2000);
    }

  ngOnInit(): void {
    this.initForm();
  }

}
