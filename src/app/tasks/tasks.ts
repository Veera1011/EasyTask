import { Component, Input } from '@angular/core';

interface Task {
  id: string;
  userid: string;
  title: string;
  summary: string;
  duedate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input() id!: string;
  @Input() name?: string;

  tasks: Task[] = [
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

  get selectedusertasks() {
    return this.tasks.filter((task: Task) => task.userid === this.id);
  }
}