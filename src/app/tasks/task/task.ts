import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Taskdetails } from '../task.model';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() task!: Taskdetails;
  // @Input() summary!: string;
  // @Input() duedate!: string;
  @Output() complete = new EventEmitter();

  onComplete() {
    console.log('Task completed:', this.task.title);
    this.complete.emit(this.task.id)
    
  }
}