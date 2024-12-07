import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../Models/employee';
import { CompetenceService } from '../../Services/competence.service';
import { Competence } from '../../Models/competence';
import { Note } from '../../Models/note';
import { NoteDto } from '../../Models/note-dto';

@Component({
  selector: 'app-assign-note',
  templateUrl: './assign-note.component.html',
  styleUrl: './assign-note.component.css'
})
export class AssignNoteComponent {

  employeeId!: number;
  employee!: Employee;
  competences!: Competence[];
  selectedCompetence!: Competence;
  note!: number;
  NoteEmployee: NoteDto = new NoteDto();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private competenceService: CompetenceService
  ) { }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEmployee();
    this.loadCompetences();
  }

  loadEmployee() {
    this.employeeService.GetEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }

  loadCompetences() {
    this.competenceService.ShowAllCompetences().subscribe(data => {
      this.competences = data;
      console.log("Loaded competences:", this.competences);
    });
  }

  assign() {
    if (this.selectedCompetence !== null && this.note !== null) {

      this.NoteEmployee.competence = this.selectedCompetence;
      this.NoteEmployee.employee = this.employeeId;
      this.NoteEmployee.note = this.note;

      console.log(this.NoteEmployee.employee);
      console.log(this.NoteEmployee.competence);

      this.employeeService.assignNote(this.NoteEmployee).subscribe(
        response => {
          console.log('Note assigned successfully:', response);
          alert('Note assigned successfully!');
          this.router.navigate(['/ShowAllEmployees']);
        },
        error => {
          console.error('Error assigning note:', error);
          alert('Error assigning note.');
        }
      );
    } else {
      alert('Please select a competence and enter a valid note.');
    }
  }
  
}
