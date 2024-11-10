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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    ShowAllUsersComponent,
    UpdateUserComponent,
    HeaderComponent,
    SingupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
