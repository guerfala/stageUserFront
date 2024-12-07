import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/employee';
import { Observable } from 'rxjs';
import { NoteDto } from '../Models/note-dto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL="http://localhost:8081/stage"

  constructor(private httpClient: HttpClient) { }

  ShowAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/ShowAllEmployees`);
  }

  AddEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/AddEmployee`, employee);
  }

  deleteEmployee(EmployeeId: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "/DeleteEmployee"}/${EmployeeId}` );
  }

  GetEmployeeById(EmployeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/GetEmployeeById/${EmployeeId}`);
  }

  assignNote(noteDto: NoteDto): Observable<NoteDto> {
    return this.httpClient.post<NoteDto>(`${this.baseURL}/assignNote`, noteDto);
  }

}
