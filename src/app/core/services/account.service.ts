import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAccount } from '../interface/IMock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<IAccount> {
    return this.http.get<IAccount>(`${this.apiUrl}/account`);
  }
}
