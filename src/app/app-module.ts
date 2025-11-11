import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { Task } from './tasks/task/task';

@NgModule({
  declarations: [
    App,
    Tasks,
    Task
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Header,
    User
  ],
  bootstrap: [App]
})
export class AppModule { }