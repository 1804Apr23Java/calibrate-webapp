import { Component, OnInit } from '@angular/core';
import { LibraryListService } from '../../services/library-list.service';
import { Library } from '../../classes/library';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  public libraryList: Library[];

  constructor(private libraryService: LibraryListService) {}

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
}
