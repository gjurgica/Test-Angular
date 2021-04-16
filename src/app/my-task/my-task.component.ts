import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { Validators,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {
  taskForm:any;
  constructor(public taskApi:TaskService,private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.taskApi.getUsersTasks();
  }
  deleteTask(id:any):void{
    let deletedTask = this.taskApi.tasks.filter((task:any) => task.id !== id);
    this.taskApi.tasks = deletedTask;
    localStorage.setItem("tasks",JSON.stringify(this.taskApi.tasks));
  }
  logout():void{
    localStorage.setItem("tasks","");
    localStorage.setItem("userId","");
  }
}
