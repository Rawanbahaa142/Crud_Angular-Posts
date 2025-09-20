import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{FormUser} from '../form-user/form-user';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule,FormUser],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  users:{name:string,email:string}[]=[];
  addUser(user: {name: string, email: string}) {
    this.users.push({
      name: user.name,
      email: user.email
    });
  }
  removeUser(index:number){
    this.users.splice(index,1);
  }

}
