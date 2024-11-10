import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { User } from '../../Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user: User = new User(); // Initialize the user object

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    console.log('Submitted User Data:', this.user); // This should log the user object with the form values
    this.userService.AddUser(this.user).subscribe(
      data => {
        console.log('User added successfully', data);
        this.router.navigate(['/ShowAll']);
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }
  
}
