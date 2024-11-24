import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

const API = "http://localhost:3000/commandes";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly http: HttpClient = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(API);
  }

  getOrderById(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${API}/${orderId}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(API, order);
  }

  updateOrder(orderId: string, order: Order): Observable<Order> {
    return this.http.put<Order>(`${API}/${orderId}`, order);
  }

  deleteOrder(orderId: string): Observable<void> {
    return this.http.delete<void>(`${API}/${orderId}`);
  }
}
