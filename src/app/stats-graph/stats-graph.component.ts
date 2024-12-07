import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-stats-graph',
  templateUrl: './stats-graph.component.html',
  styleUrls: ['./stats-graph.component.css']
})
export class StatsGraphComponent implements OnInit {
  public barChartData!: ChartConfiguration<'bar'>['data'];
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {},
      y: { beginAtZero: true },
    },
  };

  public barChartLegend = true;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getAverageByCompetence().subscribe((data: any[]) => {
      const labels = data.map((stat) => stat.competence); // Libellé des compétences
      const values = data.map((stat) => stat.averageNote); // Moyennes des notes

      this.barChartData = {
        labels: labels,
        datasets: [
          {
            data: values,
            label: 'Moyenne des Notes',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
    });
  }
}
