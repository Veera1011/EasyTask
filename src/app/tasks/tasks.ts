import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input() id!:string;
@Input() name?:string;

tasks=[
  {
    id:'t1',
    userid:'1',
    title:'Learn Angular',
    summary:'Master the Angular',
    duedate:'2025-09-09'
  },
  {
    id:'t2',
    userid:'2',
    title:'Learn Angular',
    summary:'Master the Angular',
    duedate:'2025-09-09'
  },
  {
    id:'t3',
    userid:'3',
    title:'Learn Angular',
    summary:'Master the Angular',
    duedate:'2025-09-09'
  },
  {
    id:'t4',
    userid:'4',
    title:'Learn Angular',
    summary:'Master the Angular',
    duedate:'2025-09-09'
  },
  {
    id:'t5',
    userid:'5',
    title:'Learn Angular',
    summary:'Master the Angular',
    duedate:'2025-09-09'
  }
];

get selectedusertasks(){
  return this.tasks.filter((task:any)=> task.userid === this.id);
}
}
