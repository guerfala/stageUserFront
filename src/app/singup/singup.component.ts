import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  re_password!: string;
  passwordMismatch: boolean = false;
  user: User = {  // Initialize user object
    Id: 0,
    Nom: '',
    Prenom: '',
    Email: '',
    Password: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    if (this.user.Password === this.re_password) {
      this.passwordMismatch = false;
      console.log('Submitted User Data:', this.user); // Log the user object with the form values
      this.userService.AddUser(this.user).subscribe(
        data => {
          console.log('User added successfully', data);
          this.router.navigate(['/ShowAll']);
        },
        error => {
          console.error('Error adding user', error);
        }
      );
    } else {
      this.passwordMismatch = true;
    }
  }

}
