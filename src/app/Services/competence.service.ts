import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competence } from '../Models/competence';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  private baseURL="http://localhost:8081/stage"

  constructor(private httpClient: HttpClient) { }

  ShowAllCompetences(): Observable<Competence[]> {
    return this.httpClient.get<Competence[]>(`${this.baseURL}/ShowAllCompetences`);
  }

  AddCompetence(competence: Competence): Observable<Competence> {
    return this.httpClient.post<Competence>(`${this.baseURL}/AddCompetence`, competence);
  }

  DeleteCompetence(CompetenceId: number): Observable<Object>{
    return this.httpClient.delete( `${this.baseURL + "/DeleteCompetence"}/${CompetenceId}` );
  }

  GetCompetenceById(CompetenceId: number): Observable<Competence> {
    return this.httpClient.get<Competence>(`${this.baseURL}/GetCompetenceById/${CompetenceId}`);
  }
}
