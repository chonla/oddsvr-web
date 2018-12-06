import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vr, VrCreation } from '../models/vr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Distance } from '../models/distance';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VrService {

  constructor(private http: HttpClient, private auth: AuthService) {}

  create(vr: VrCreation): Observable<Vr> {
    return this.http.post<Vr>(`${environment.urls.baseUrl}/api/vr`, vr);
  }

  join(id: string, dist: number): Observable<void> {
    const distance: Distance = {
      distance: dist
    };
    console.log('join', id, distance);
    return this.http.post<void>(`${environment.urls.baseUrl}/api/join/${id}`, distance);
  }

  mine(): Observable<Vr[]>{
    return this.http.get<Vr[]>(`${environment.urls.baseUrl}/api/vr`);
  }

  get(id: string): Observable<Vr> {
    if (this.auth.isLogin()) {
      return this.http.get<Vr>(`${environment.urls.baseUrl}/api/vrx/${id}`);
    }
    return this.http.get<Vr>(`${environment.urls.baseUrl}/api/vr/${id}`);
  }
}
