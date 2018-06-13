import { Injectable } from '@angular/core';
import { Account } from '../classes/account';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  private accountUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/account';
  private fullURL: string;

  public getAccountById(id: number): Observable<Account> {
    this.fullURL = `${this.accountUrl}/${id}`;
    console.log(this.fullURL);
    return this.httpClient.get<Account>(this.fullURL);
  }
}
