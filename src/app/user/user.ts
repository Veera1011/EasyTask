import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { users } from '../users';

const index = Math.floor(Math.random() * users.length)

//  type user ={
//     id:string,
//     Name:string,
//     img:string
//   }

   interface user{
    id:string,
    Name:string,
    img:string
  }

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() user!:user;
  // @Input() id!: string;
  // @Input() img!: string;
  //  @Input({required:true}) name!: string;

  // name = input.required<string>();
  select = output<string>();
  //  @Output()  select = new EventEmitter();
  // selected= signal(users[index]) ;
  // img=computed(()=>this.selected().img)

  get getimage() {
    return this.user.img;
  }

  Onuser() {
    // const index=Math.floor(Math.random() * users.length);
    // this.selected.set(users[index]);
    this.select.emit(this.user.id);


  }

}
