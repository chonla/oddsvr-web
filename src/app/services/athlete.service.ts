import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Athlete } from '../models/athlete';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private http: HttpClient) { }

  me(): Observable<Athlete> {
    return this.http.get<Athlete>(`${environment.urls.baseUrl}/api/me`);
  }
}
