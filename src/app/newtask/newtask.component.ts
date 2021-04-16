import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {TaskService} from '../task.service';
import {TaskModel} from '../task.model' ;

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  newTaskForm:any;
  userId= Number(localStorage.getItem('userId'));
  constructor(private fb: FormBuilder,private router: Router ,private taskApi:TaskService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newTaskForm = this.fb.group({
      description: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      status: ['', Validators.required],
   });
 }
 isValidInput(fieldName:any): boolean {
   return this.newTaskForm.controls[fieldName].invalid &&
     (this.newTaskForm.controls[fieldName].dirty || this.newTaskForm.controls[fieldName].touched);
}

  addTask():void{
    setTimeout(() =>{
      if(this.taskApi.tasks .length !== 0){
        let lastObject = this.taskApi.tasks[this.taskApi.tasks.length - 1];
        let newid =lastObject.id+1;
        let newTask = new TaskModel(newid,this.newTaskForm.value.description,this.newTaskForm.value.from,this.newTaskForm.value.to,this.newTaskForm.value.status,this.userId);
        this.taskApi.tasks.push(newTask);
      }else{
        let newTask = new TaskModel(0,this.newTaskForm.value.description,this.newTaskForm.value.from,this.newTaskForm.value.to,this.newTaskForm.value.status,this.userId);
        this.taskApi.tasks.push(newTask);
      }
      
      this.router.navigate(['/task']);
      localStorage.setItem("tasks",JSON.stringify(this.taskApi.tasks));
    }, 2000);
  }

}
