import { Injectable } from '@angular/core';
import { Question } from '../classes/question';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  private questionUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/question';

  public getQuestionById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.questionUrl}/${id}`);
  }
}
