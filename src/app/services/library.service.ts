import { Injectable } from '@angular/core';
import { Library } from '../classes/library';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  private libraryUrl = 'http://ec2-184-72-131-208.compute-1.amazonaws.com:8080/CalibrateBackend/library';

  public getLibraryById(libraryId: number): Observable<Library> {
    return this.httpClient.get<Library>(`${this.libraryUrl}/${libraryId}`);
  }
}
