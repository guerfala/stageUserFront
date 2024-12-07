import { Component } from '@angular/core';
import { NoteService } from '../Services/note.service';

@Component({
  selector: 'app-stats-widget',
  templateUrl: './stats-widget.component.html',
  styleUrl: './stats-widget.component.css'
})
export class StatsWidgetComponent {
  stats: any[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getAverageByCompetence().subscribe(data => {
      this.stats = data;
    });
  }
}
