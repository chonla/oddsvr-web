import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookie: CookieService,
    private router: Router,
    private http: HttpClient) { }

  getToken(): string {
    return this.cookie.get('token');
  }

  saveToken(token: string): Observable<any> {
    return this.http.get(`${environment.urls.baseUrl}/gateway?code=${token}`);
  }

  isLogin(): boolean {
    return this.cookie.check('token');
  }

  signOut() {
    this.cookie.delete('token', '/');
    this.router.navigate(['/welcome']);
  }
}
