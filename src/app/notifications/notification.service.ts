import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
<<<<<<< HEAD
  private apiUrl = 'https://backendanthony-production.up.railway.app/';
=======
  private apiUrl = 'http://localhost:3000/notifications';
>>>>>>> f8548dd7c1eaaad3f796726d57cebd435cec9c8d

  constructor(private http: HttpClient) {}

  sendNotification(message: string, type: string): Observable<any> {
    const payload = {
      message,
      type,
      created_at: new Date().toISOString()
    };
    return this.http.post(this.apiUrl, payload);
  }

  getNotifications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


