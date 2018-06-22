import { Component, OnInit } from '@angular/core';
import { LibraryListService } from '../../services/library-list.service';
import { Library } from '../../classes/library';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  public libraryList: Library[];

  constructor(private libraryService: LibraryListService, private router: Router) {}

  ngOnInit() {
    this.getPublicLibraries();
  }
  getPublicLibraries(): void {
    this.libraryService.getPublicLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getLibrary(libraryId: number) {
    sessionStorage.setItem('libraryId', libraryId.toString());
    this.router.navigate(['library']);
  }

}
