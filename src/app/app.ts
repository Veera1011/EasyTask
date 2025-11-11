import { Component, signal } from '@angular/core';
import { users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('EasyTask');
  onselecteduser?: string;
  users = users;

  get selecteduser() {
    return this.users.find((user: any) => user.id === this.onselecteduser);
  }

  OnselectUser(id: string) {
    this.onselecteduser = id;
  }
}