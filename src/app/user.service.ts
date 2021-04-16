import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:any;

  constructor(private http:HttpClient,private router: Router) { 
    this.getUsers().subscribe(data => {
      this.users = data;
      localStorage.setItem("users",JSON.stringify(this.users));
  });
  }
  public getUsers(): Observable<any> {
    return this.http.get("assets/users.json");
  }
}
