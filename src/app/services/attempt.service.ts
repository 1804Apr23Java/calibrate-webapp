import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attempt } from '../classes/attempt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttemptService {

  constructor(private httpClient: HttpClient) { }

  private attemptURL = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/attempt/';
  private fullURL: string;

  public getAttemptsById(id: number): Observable<Attempt[]> {
    this.fullURL = `${this.attemptURL}/byAccount/${id}`;
    return this.httpClient.get<Attempt[]>(this.fullURL);
  }
}
