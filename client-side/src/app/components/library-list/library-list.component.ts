import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Library } from '../../models/library';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit, DoCheck {
  public libraryList: Library[];

  constructor(private gatewayService: GatewayService, private router: Router) {}

  ngOnInit() {
    if (sessionStorage.getItem('getUserLibraries')) {
      this.getUserLibraries(+sessionStorage.getItem('accountId'));
    } else if (sessionStorage.getItem('getPublicLibraries')) {
      this.getPublicLibraries();
    } /* else {
      this.router.navigate(['profile']);
    } */
   }

  ngDoCheck() {
    sessionStorage.removeItem('getUserLibraries');
    sessionStorage.removeItem('getPublicLibraries');
  }

  getUserLibraries(accountId: number): void {
    this.gatewayService.getLibrariesByAccountId(accountId).subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getPublicLibraries(): void {
    this.gatewayService.getPublicLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getLibrary(libraryId: number) {
    sessionStorage.setItem('libraryId', libraryId.toString());
    this.router.navigate(['quizzes/library']);
  }

}
