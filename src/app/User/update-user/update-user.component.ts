import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { User } from '../../Models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  
  id!: number;
  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

      this.userService.GetUserById(this.id).subscribe(data =>{
        this.user = data;
      });
  }

  onSubmit(){
    this.userService.UpdateUser(this.id, this.user)
      .subscribe(data =>{
        this.router.navigate(['/ShowAll']);
      },error => console.log(error));
  }
}
