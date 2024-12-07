import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ShowAllUsersComponent } from './User/show-all-users/show-all-users.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';
import { HeaderComponent } from './header/header.component';

import { MatTableModule } from '@angular/material/table'; // Import MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Optional: for pagination
import { MatSortModule } from '@angular/material/sort';
import { SingupComponent } from './singup/singup.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { ShowAllEmployeeComponent } from './Employee/show-all-employee/show-all-employee.component';
import { ShowAllCompetenceComponent } from './Competence/show-all-competence/show-all-competence.component';
import { AddCompetenceComponent } from './Competence/add-competence/add-competence.component';
import { AssignNoteComponent } from './Employee/assign-note/assign-note.component';
import { StatsWidgetComponent } from './stats-widget/stats-widget.component';
import { StatsGraphComponent } from './stats-graph/stats-graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    ShowAllUsersComponent,
    UpdateUserComponent,
    HeaderComponent,
    SingupComponent,
    AddEmployeeComponent,
    ShowAllEmployeeComponent,
    ShowAllCompetenceComponent,
    AddCompetenceComponent,
    AssignNoteComponent,
    StatsWidgetComponent,
    StatsGraphComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
