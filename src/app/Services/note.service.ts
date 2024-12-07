import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../Models/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL="http://localhost:8081/stage"

  constructor(private httpClient: HttpClient) { }

  ShowAllNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseURL}/ShowAllNotes`);
  }

  AddNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(`${this.baseURL}/AddNote`, note);
  }

  DeleteNote(NoteId: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "/DeleteNote"}/${NoteId}` );
  }

  GetNoteById(NoteId: number): Observable<Note> {
    return this.httpClient.get<Note>(`${this.baseURL}/GetNoteById/${NoteId}`);
  }

  getAverageByCompetence(): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/stats`);
  }
  
}
