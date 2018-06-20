import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../classes/quiz';
import { Library } from '../classes/library';
import { Attempt } from '../classes/attempt';
import { Account } from '../classes/account';
import { Question } from '../classes/question';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  private backendUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend';

  public getQuizById(id: number): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.backendUrl}/quiz/${id}`);
  }

  public getLibraryById(libraryId: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.backendUrl}/library/${libraryId}`);
  }

  public getPublicLibraries(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.backendUrl}/library/public`);
  }
  public getPendingLibraries(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.backendUrl}/library/pending`);
  }

  public getAttemptsById(id: number): Observable<Attempt[]> {
    return this.httpClient.get<Attempt[]>(`${this.backendUrl}/attempt/byAccount/${id}`);
  }

  public getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.backendUrl}/account/${id}`);
  }

  public accountLogin(email: string, password: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.backendUrl}/account/login`,
      { 'email': email, 'password': password });
  }

  public addNewAccount(email: string, password: string, firstname: string, lastname: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.backendUrl}/account/add`, new Account(email, firstname + lastname, password));
  }

  public getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.backendUrl}/question/${id}`);
  }

}
