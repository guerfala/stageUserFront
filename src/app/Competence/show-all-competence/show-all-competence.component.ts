import { Component, OnInit } from '@angular/core';
import { Competence } from '../../Models/competence';
import { CompetenceService } from '../../Services/competence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-competence',
  templateUrl: './show-all-competence.component.html',
  styleUrl: './show-all-competence.component.css'
})
export class ShowAllCompetenceComponent implements OnInit {
  
  displayedColumns: string[] = ['Libelle', 'Actions'];
  dataSource: Competence[] = []; // Initialize as an empty array

  constructor(private competenceService: CompetenceService, private router: Router) { }

  ngOnInit() {
    this.competenceService.ShowAllCompetences().subscribe(
      data => {
        this.dataSource = data; // Assign the fetched data to dataSource
      },
      error => {
        console.error('Error fetching competences', error);
      }
    );
  }

  DeleteCompetence(CompetenceId: number) {
    this.competenceService.DeleteCompetence(CompetenceId).subscribe(data => {
      this.competenceService.ShowAllCompetences().subscribe(res => {
        this.dataSource = res;
      });
    });
  }

  updateCompetence(CompetenceId: number) {
    this.router.navigate(['/UpdateEmployee', CompetenceId]);
  }
}
