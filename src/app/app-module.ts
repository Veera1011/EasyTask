import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Header,
    User,
    FormsModule,
    DatePipe,
   SharedModule,
   TasksModule
  ],
  providers:[],
  bootstrap: [App]
})
export class AppModule { }