import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';

import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyTaskComponent } from './my-task/my-task.component';
import { appRoutes } from './routes';
import {UserService} from './user.service';
import { NewtaskComponent } from './newtask/newtask.component';
import { EdittaskComponent } from './edittask/edittask.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MyTaskComponent,
    NewtaskComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
