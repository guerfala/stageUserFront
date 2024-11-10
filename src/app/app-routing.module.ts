import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowAllUsersComponent } from './User/show-all-users/show-all-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'ShowAll', component: ShowAllUsersComponent},
  {path: 'AddUser', component: AddUserComponent},
  {path: 'UpdateUser/:id', component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
