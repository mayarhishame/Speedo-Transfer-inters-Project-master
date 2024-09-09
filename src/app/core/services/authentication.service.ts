import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  register(payload: any) {
    return this.http.post('tempRegisterURL', payload);
  }

  login(payload: any) {
    return this.http.post('tempLoginURL', payload);
  }
}
