import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegistrationData } from '../interface/form';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = "YOUR_API_ENDPOINT";

  constructor(private http: HttpClient) { }

  public header() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return headers;
  }

  submitRegistration(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, formData);
  }
}
