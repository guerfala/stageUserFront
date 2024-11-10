import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css'] // Fixed styleUrls
})
export class ShowAllUsersComponent implements OnInit {

  displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Actions'];
  dataSource: User[] = []; // Initialize as an empty array

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.ShowAllUsers().subscribe(
      data => {
        this.dataSource = data; // Assign the fetched data to dataSource
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      this.userService.ShowAllUsers().subscribe(res => {
        this.dataSource = res;
      });
    });
  }

  updateUser(userId: number) {
    this.router.navigate(['/UpdateUser', userId]);
  }
}
