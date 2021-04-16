import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";
import {TaskService} from '../task.service';
import {FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['../newtask/newtask.component.css']
})
export class EdittaskComponent implements OnInit {

  editForm:any;
  taskId:any;
  task:any;
  constructor(private router: ActivatedRoute,private taskApi:TaskService,private fb: FormBuilder,private route:Router ) { }

  initForm(): void {
    this.editForm = this.fb.group({
      description: [this.task.description],
      from: [this.task.from],
      to: [this.task.to],
      status: [this.task.status],
   });
 }

  ngOnInit(): void {
    this.getTask();
    this.initForm();
  }
  editTask():void{
    setTimeout(() =>{ 
      this.task.description = this.editForm.value.description;
      this.task.from = this.editForm.value.from;
      this.task.to = this.editForm.value.to; 
      this.task.status = this.editForm.value.status;
      this.task.modified = new Date();        
      this.route.navigate(['/task']);
      console.log(this.task)
      localStorage.setItem("tasks",JSON.stringify(this.taskApi.tasks));
    }, 2000);
  }
  getTask():void{
     this.router.params.subscribe(params => {
      this.taskId = params['id'];
    });
    this.task = this.taskApi.tasks.find((task:any) => task.id === Number(this.taskId));
  }

}
