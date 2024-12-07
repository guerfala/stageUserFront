import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowAllUsersComponent } from './User/show-all-users/show-all-users.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { SingupComponent } from './singup/singup.component';
import { ShowAllEmployeeComponent } from './Employee/show-all-employee/show-all-employee.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { ShowAllCompetenceComponent } from './Competence/show-all-competence/show-all-competence.component';
import { AddCompetenceComponent } from './Competence/add-competence/add-competence.component';
import { AssignNoteComponent } from './Employee/assign-note/assign-note.component';
import { StatsWidgetComponent } from './stats-widget/stats-widget.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SingupComponent},
  {path: 'ShowAll', component: ShowAllUsersComponent},
  {path: 'AddUser', component: AddUserComponent},
  {path: 'UpdateUser/:id', component: UpdateUserComponent},

  {path: 'ShowAllEmployees', component: ShowAllEmployeeComponent},
  {path: 'AddEmployee', component: AddEmployeeComponent},
  {path: 'assignNote/:id', component: AssignNoteComponent},
  {path: 'UpdateEmployee/:id', component: UpdateUserComponent},

  {path: 'ShowAllCompetences', component: ShowAllCompetenceComponent},
  {path: 'AddCompetence', component: AddCompetenceComponent},
  {path: 'UpdateCompetence/:id', component: UpdateUserComponent},

  {path: 'stats', component: StatsWidgetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
