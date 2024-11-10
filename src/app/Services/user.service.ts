import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:8081/stage"

  constructor(private httpClient: HttpClient) { }

  ShowAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}/ShowAllUsers`);
  }

  AddUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/AddUser`, user);
  }

  deleteUser(UserId: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "/DeleteUser"}/${UserId}` );
  }

  GetUserById(UserId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/GetUserById/${UserId}`);
  }

  UpdateUser(UserId: number, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/UpdateUser/${UserId}`, user);
  }
}
