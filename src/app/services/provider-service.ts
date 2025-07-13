import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http: HttpClient) { }
  getProviders() {
    return this.http.get("http://127.0.0.1:8081/providers/");
  }
}
