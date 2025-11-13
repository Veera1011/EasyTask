import { Injectable } from "@angular/core";
import { Taskdetails } from "./task.model";

@Injectable({providedIn:'root'})
export class TasksService{
   tasks: Taskdetails[] = [
    {
      id: 't1',
      userid: '1',
      title: 'Learn Angular',
      summary: 'Master the Angular framework',
      duedate: '2025-09-09'
    },
    {
      id: 't2',
      userid: '2',
      title: 'Build Components',
      summary: 'Create reusable components',
      duedate: '2025-09-15'
    },
    {
      id: 't3',
      userid: '3',
      title: 'Setup Routing',
      summary: 'Configure Angular routing',
      duedate: '2025-09-20'
    },
    {
      id: 't4',
      userid: '4',
      title: 'API Integration',
      summary: 'Connect to backend APIs',
      duedate: '2025-09-25'
    },
    {
      id: 't5',
      userid: '5',
      title: 'Testing',
      summary: 'Write unit tests',
      duedate: '2025-09-30'
    }
  ];

  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks= JSON.parse(tasks)
    }
  }
   selectedusertasks(userid:string){
    return this.tasks.filter((task: Taskdetails) => task.userid === userid);
  }

   addtask(data:any,id:any){
     this.tasks.push({
      id: new Date().getTime().toString(),
      userid: id,
      title: data.title,
      summary: data.summary,
      duedate: data.duedate
    });
    this.savetasks()
   }

    taskcompleted(id:any){
      this.tasks = this.tasks.filter((task:any)=>task.id !== id);
      this.savetasks()
    }

    private savetasks(){
      localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}