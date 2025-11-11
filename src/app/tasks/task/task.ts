import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input() title!: string;
  @Input() summary!: string;
  @Input() duedate!: string;

  onComplete() {
    console.log('Task completed:', this.title);
    
  }
}