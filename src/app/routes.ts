import {Routes} from '@angular/router';
import { EdittaskComponent } from './edittask/edittask.component';
import { LoginComponent } from './login/login.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { RegisterComponent } from './register/register.component';


export const appRoutes: Routes = [

        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path: 'task',
          component: MyTaskComponent
        },
        {
          path: 'newtask',
          component: NewtaskComponent
        },
        {
          path: 'edittask/:id',
          component: EdittaskComponent
        },
        {
          path: '',
          redirectTo:  (() => {
            return localStorage.getItem("userId") ==="" ? '/login' : '/task';
          })(),
          pathMatch: 'full'
        }
  ]