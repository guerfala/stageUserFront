import { Component } from '@angular/core';
import { Competence } from '../../Models/competence';
import { CompetenceService } from '../../Services/competence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrl: './add-competence.component.css'
})
export class AddCompetenceComponent {

  competence: Competence = new Competence(); // Initialize the user object

  constructor(private competenceService: CompetenceService, private router: Router) { }

  onSubmit() {
    console.log('Submitted Competence Data:', this.competence); // This should log the user object with the form values
    this.competenceService.AddCompetence(this.competence).subscribe(
      data => {
        console.log('Competence added successfully', data);
        this.router.navigate(['/ShowAllCompetences']);
      },
      error => {
        console.error('Error adding Competence', error);
      }
    );
  }
}
