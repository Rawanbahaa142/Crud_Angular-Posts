
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-user.html'
})
export class FormUser {

  user = { name: '',
     email: '' };
     @Output() userForm = new EventEmitter<{name: string, email: string}>();
     onSubmit() {
      console.log(this.user);
      if(this.user.name && this.user.email){
      this.userForm.emit(this.user);
      this.user = { name: '',
         email: '' };
      }
     }

  
}
