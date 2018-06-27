import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { Library } from '../models/library';
import { Attempt } from '../models/attempt';
import { Account } from '../models/account';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  private backendUrl = 'http://ec2-174-129-59-140.compute-1.amazonaws.com:8080/CalibrateBackend';
  private zuulUrl = 'http://ec2-35-171-24-66.compute-1.amazonaws.com:8765';
  private backendLoginUrl = 'http://ec2-35-171-24-66.compute-1.amazonaws.com:8764';

  public getQuizById(id: number): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.backendUrl}/quiz/${id}`);
  }

  public getLibraryById(libraryId: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.zuulUrl}/library/libraryid/${libraryId}`);
  }

  public getQuestionsByLibraryId(libraryId: number): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.zuulUrl}/quiz/question/lib/${libraryId}`);
  }

  public getLibrariesByAccountId(accountId: number): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.zuulUrl}/library/byAccountId/${accountId}`);
  }
// admin approve/deny
  public makeLibraryPending(libraryId: number): Observable<Library> {
    return this.httpClient.patch<Library>(`${this.backendUrl}/library/makePending/`, libraryId);
  }
  public makeLibraryPublic(libraryId: number): Observable<Library> {
    return this.httpClient.patch<Library>(`${this.backendUrl}/library/makePublic/`, libraryId);
  }
  public makeLibraryPrivate(libraryId: number): Observable<Library> {
    return this.httpClient.patch<Library>(`${this.backendUrl}/library/makePrivate/`, libraryId);
  }

  public getPublicLibraries(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.zuulUrl}/library/status/public`);
  }

  public getPendingLibraries(): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.zuulUrl}/library/status/pending`);
  }

  public getAttemptsById(id: number): Observable<Attempt[]> {
    return this.httpClient.get<Attempt[]>(`${this.backendUrl}/attempt/byAccount/${id}`);
  }

  public getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.backendUrl}/account/${id}`);
  }

  public accountLogin(email: string, password: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.zuulUrl}/account/login`,
      { 'email': email, 'password': password });
  }

  public addNewAccount(email: string, password: string, firstName: string, lastName: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.backendUrl}/account/add`, new Account(email, firstName, lastName, password));
  }

  public getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.backendUrl}/account/all`);
  }


  // WRITE HTTPCLIENT PATCH METHOD TO DEACTIVATE ACCOUNT
  public deactivateAccount(): Observable<boolean> {
    return null;
  }

  // working example of Zuul post
  public addNewLibrary(accountId: number, name: string): Observable<Library> {
    console.log('got to service');
    console.log(`{ 'accountId': ${accountId}, 'name': ${name}, 'numberOfQuestions': 0, 'status': 'PRIVATE' }`);
    return this.httpClient.post<Library>(`${this.zuulUrl}/library/new`, (
      { 'accountId': accountId, 'name': name, 'numberOfQuestions': 0, 'status': 'PRIVATE' }));
  }

  public getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.backendUrl}/question/${id}`);
  }

}
