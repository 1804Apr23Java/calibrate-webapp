import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Library } from '../classes/library';

@Injectable({
  providedIn: 'root'
})
export class LibraryListService {

  constructor(private httpClient: HttpClient) { }

  private accountUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/library/public';
  private fullURL: string;

  public getLibrary(): Observable<Library[]> {
   // this.fullURL = `${this.accountUrl}/${id}`;
    return this.httpClient.get<Library[]>(this.accountUrl);
  }
}
