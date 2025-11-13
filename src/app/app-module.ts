import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';
import { NewTask } from './tasks/new-task/new-task';
import { FormsModule } from '@angular/forms';
import { Card } from './shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from './tasks/tasks.service';

@NgModule({
  declarations: [
    App,
    Tasks,
    Task,
    NewTask,
    Card
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Header,
    User,
    FormsModule,
    DatePipe
  ],
  providers:[],
  bootstrap: [App]
})
export class AppModule { }