import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sweet } from '../models/sweet';
const API="http://localhost:3000/gateaux";
@Injectable({
  providedIn: 'root'
})
export class SweetService {
  private readonly http:HttpClient=inject(HttpClient);
  getSweets():Observable<Sweet[]>{
    return this.http.get<Sweet[]>(API);
  }
  getSweet(id:number): Observable<Sweet> {
    return this.http.get<Sweet>(API+"/"+id);
  }
  updateSweet(sweet: Sweet): Observable<Sweet> {
    return this.http.put<Sweet>(API+"/"+sweet.id, sweet);
  }
  getSearchSweet(name: string, category: string): Observable<Sweet[]> {
    return new Observable<Sweet[]>(observer => {
      this.getSweets().subscribe(sweets => {
        const filteredSweets = sweets.filter(sweet =>
          sweet.name.toUpperCase().includes(name.toUpperCase()) &&
        sweet.category.toUpperCase().includes(category.toUpperCase())
        );
      }
      )
    }
    )
  }
}