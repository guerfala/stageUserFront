import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-stats-graph',
  templateUrl: './stats-graph.component.html',
  styleUrls: ['./stats-graph.component.css']
})
export class StatsGraphComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData(): void {
    // Call the service to fetch average data by competence
    this.noteService.getAverageByCompetence().subscribe((data: any[]) => {
      // Extract labels and data values from the API response
      const labels = data.map(stat => stat.competence); // Assumes response has a 'competence' field
      const values = data.map(stat => stat.averageNote); // Assumes response has an 'averageNote' field

      // Create the chart with fetched data
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels, // Use dynamic labels from the API
          datasets: [{
            label: 'Average Notes',
            data: values, // Use dynamic data from the API
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
  }
}
