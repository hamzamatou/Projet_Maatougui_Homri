import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = "http://localhost:3000/admin";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly http: HttpClient = inject(HttpClient);
  getLogin(): Observable<{ userName: string; password: string }> {
    return this.http.get<{ userName: string; password: string }>(API);
  }
  modifyLogin(login: { userName: string; password: string }): Observable<{ userName: string; password: string }> {
    return this.http.put<{ userName: string; password: string }>(`${API}/`, login);
  }
  logIn(userName: string, password: string): boolean {
    let loginObj = { userName: 'admin', password: '12345678' }; 
    if (userName === loginObj.userName && password === loginObj.password) {
      return true;
    }
    return false;
  }
}