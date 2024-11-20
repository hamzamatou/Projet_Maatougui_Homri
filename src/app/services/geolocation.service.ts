import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private url = 'https://booking-com15.p.rapidapi.com/api/v1/meta/getCurrency';
http:HttpClient=inject(HttpClient);
  getCurrency(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '157f456ce0mshbc5722fe51c3322p13516cjsndd806b1b1dd4',
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
    });
    return this.http.get(this.url, { headers });
  }
}
