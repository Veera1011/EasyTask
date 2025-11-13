import { Component, Input } from '@angular/core';

import { Taskdetails } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input() id!: string;
  @Input() name?: string;
  // private tasksservice: TasksService;

  // constructor( ts: TasksService) {
  //   this.tasksservice=ts
  // }
   constructor(private ts: TasksService) {

  }
  isadding: boolean = false;


  get selectedusertasks() {
    return this.ts.selectedusertasks(this.id);
  }

  taskcompleted(id: any) {
    console.log(id);
    this.ts.taskcompleted(id);

  }

  newtask() {
    this.isadding = true;

  }
  ontaskcancel() {
    this.isadding = false;
  }
 
}