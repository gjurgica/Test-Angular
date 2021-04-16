import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks:any;
  constructor(private http:HttpClient,private router: Router) { 
    this.getUsersTasks().subscribe(data => {
      let userId = localStorage.getItem("userId");
      let check =data.filter((user:any) => user.userId === Number(userId,));
      console.log(check)
      if(check !== undefined){
        this.tasks = check;
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
        }
        else{
          
        }
  });
  }
  public getUsersTasks(): Observable<any> {
    return this.http.get("assets/tasks.json");
  }
}
