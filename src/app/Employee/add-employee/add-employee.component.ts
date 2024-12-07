import { Component } from '@angular/core';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee: Employee = new Employee(); // Initialize the user object

  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit() {
    console.log('Submitted Employee Data:', this.employee); // This should log the user object with the form values
    this.employeeService.AddEmployee(this.employee).subscribe(
      data => {
        console.log('Employee added successfully', data);
        this.router.navigate(['/ShowAllEmployees']);
      },
      error => {
        console.error('Error adding user', error);
      }
    );
  }
}
