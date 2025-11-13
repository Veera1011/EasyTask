import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
@Input() userid!:string;
  @Output() oncancel=new EventEmitter<void>();
 
  enteredtitle='';
  enterredsummary='';
  entereddate=''

  private ts=inject(TasksService)

  Oncancel(){
    this.oncancel.emit()
  }

  submitdata(){
  this.ts.addtask({
    title: this.enteredtitle,
    summary: this.enterredsummary,
    date: this.entereddate
  },this.userid)
  }

}
