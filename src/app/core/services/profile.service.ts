import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface UserProfile {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl =
    'https://sha256-1f39a1226a97.onrender.com/api/v1/account/balance';

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/5`);
  }
}
