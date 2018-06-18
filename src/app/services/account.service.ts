import { Injectable } from '@angular/core';
import { Account } from '../classes/account';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private accountUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/account';
  private params: HttpParams;

  public getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.accountUrl}/${id}`);
  }

  public accountLogin(email: string, password: string): Observable<Account> {

    this.params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.post<Account>(`${this.accountUrl}/login`, null, {params: this.params});
  }
}
