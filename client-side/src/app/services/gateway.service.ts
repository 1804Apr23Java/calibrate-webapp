import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/quiz';
import { Library } from '../models/library';
import { Attempt } from '../models/attempt';
import { Account } from '../models/account';
import { Question, Answers } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  private backendUrl = 'http://ec2-174-129-59-140.compute-1.amazonaws.com:8080/CalibrateBackend';
  private zuulUrl = 'http://ec2-35-171-24-66.compute-1.amazonaws.com:8765';


/*---------------------------- Attempt Services ----------------------------*/
  public getAttemptsById(id: number): Observable<Attempt[]> {
    return this.httpClient.get<Attempt[]>(`${this.zuulUrl}/attempt/byAccount/${id}`);
  }

/*---------------------------- Account Services ----------------------------*/
  public getAccountById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.zuulUrl}/account/user/${id}`);
  }

  public accountLogin(email: string, password: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.zuulUrl}/account/login`,
      { 'email': email, 'password': password });
  }

  public getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.zuulUrl}/account/all`);
  }

  public addNewAccount(email: string, password: string, firstName: string, lastName: string): Observable<Account> {
    return this.httpClient.post<Account>(`${this.zuulUrl}/account/register`,
      {'accountId': 0, 'email': email, 'password': password, 'firstName': firstName, 'lastName': lastName });
  }

  public updateFirstName(accountId: number, firstName: string): Observable<Account> {
    let p = (new HttpParams()).set('firstName', firstName);
    return this.httpClient.patch<Account>(`${this.zuulUrl}/account/firstname/${accountId}`, null, { params: p });
  }

  public updateLastName(accountId: number, lastName: string): Observable<Account> {
    let p = (new HttpParams()).set('lastName', lastName);
    return this.httpClient.patch<Account>(`${this.zuulUrl}/account/lastname/${accountId}`, null, { params: p });
  }

  // WRITE HTTPCLIENT PATCH METHOD TO DEACTIVATE ACCOUNT
  public deactivateAccount(): Observable<boolean> {
    return null;
  }

/*---------------------------- Library Services ----------------------------*/
  public getLibraryById(libraryId: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.zuulUrl}/library/libraryid/${libraryId}`);
  }

  public getLibrariesByAccountId(accountId: number): Observable<Library[]> {
    return this.httpClient.get<Library[]>(`${this.zuulUrl}/library/byAccountId/${accountId}`);
  }

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

  public addNewLibrary(accountId: number, name: string): Observable<Library> {
    console.log('got to service');
    return this.httpClient.post<Library>(`${this.zuulUrl}/library/new`, {'libraryId': 0, 'accountId': accountId, 'name': name, 'numberOfQuestions': 0, 'status': 'PRIVATE' });
  }


/*---------------------------- Quiz Services ----------------------------*/

  public getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.zuulUrl}/quiz/question/${id}`);
  }

  public generateQuiz(libraryIds: number[], name: string, numQuestions: number ): Observable<Quiz> {
    return this.httpClient.post<Quiz>(`${this.zuulUrl}/quiz/quiz/generate`,
      { 'libraryIds': libraryIds, 'name': name, 'numQuestions': numQuestions });
    }

  public addNewAnswer(value: string, isCorrect: boolean): Observable<Answers> {
    let h = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let p = (new HttpParams()).set('content', value).set('isCorrect', isCorrect.toString());
    return this.httpClient.post<Answers>(`${this.zuulUrl}/quiz/answer/add`, null, {'headers': h, 'params': p });
  }

  public editAnswer(answerId: number, value: string, isCorrect: boolean, questionId: number): Observable<Answers> {
    let h = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let p = (new HttpParams()).set('value', value).set('isCorrect', isCorrect.toString()).set('question_id', questionId.toString());
    return this.httpClient.put<Answers>(`${this.zuulUrl}/quiz/answer/edit/${answerId}`, null, {'headers': h, 'params': p });
  }

  public getQuizById(id: number): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.backendUrl}/quiz/${id}`);
  }

    public getQuestionsByLibraryId(libraryId: number): Observable<Question[]> {
    return this.httpClient.get<Question[]>(`${this.zuulUrl}/quiz/question/lib/${libraryId}`);
  }

  public submitNewQuestion(value: string, libraryId: number, difficulty: number): Observable<Question> {
    let p = (new HttpParams()).set('content', value).set('difficulty', difficulty.toString()).set('library_id', libraryId.toString());
    return this.httpClient.post<Question>(`${this.zuulUrl}/quiz/question/add`, null, { 'params': p });
  }

  public updateQuestion(id: number, value: string): Observable<Question> {
    let h = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let p = (new HttpParams()).set('content', value);
    return this.httpClient.put<Question>(`${this.zuulUrl}/quiz/question/update/${id}`, null, {'headers': h, 'params': p});
  }

}
