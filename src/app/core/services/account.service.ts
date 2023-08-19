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

  getAccounts(): Observable<IAccount[]> {
    return this.http.get<IAccount[]>(`${this.apiUrl}/account`);
  }

  createAccount(newAccount: IAccount): Observable<IAccount> {
    return this.http.post<IAccount>(`${this.apiUrl}/account`, newAccount);
  }

  updateAccount(email: string, updatedAccount: IAccount): Observable<IAccount> {
    return this.http.put<IAccount>(`${this.apiUrl}/account/${email}`, updatedAccount);
  }

  patchAccount(email: string, updates: Partial<IAccount>): Observable<IAccount> {
    return this.http.patch<IAccount>(`${this.apiUrl}/account/${email}`, updates);
  }

  deleteAccount(email: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/account/${email}`);
  }
}
