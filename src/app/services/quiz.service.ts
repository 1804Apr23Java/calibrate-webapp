import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from '../classes/library';
import { Quiz } from '../classes/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  private accountUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/quiz/5';

  public getPublicLibraries(): Observable<Quiz> {
    return this.httpClient.get<Quiz>(this.accountUrl);
  }
}
