import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../Models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-employee',
  templateUrl: './show-all-employee.component.html',
  styleUrl: './show-all-employee.component.css'
})
export class ShowAllEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['Nom', 'Prenom', 'Actions'];
  dataSource: Employee[] = []; // Initialize as an empty array

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeService.ShowAllEmployees().subscribe(
      data => {
        this.dataSource = data; // Assign the fetched data to dataSource
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.employeeService.ShowAllEmployees().subscribe(res => {
        this.dataSource = res;
      });
    });
  }

  assignNote(id: number) {
    this.router.navigate(['/assignNote', id]);
  }

  updateEmployee(userId: number) {
    this.router.navigate(['/UpdateEmployee', userId]);
  }
}
