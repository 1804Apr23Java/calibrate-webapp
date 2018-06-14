import { Component, OnInit } from '@angular/core';
import { Library } from '../../classes/library';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public library: Library = new Library();

  constructor(private libraryService: LibraryService) { }

  getLibraryById(libraryId: number): void {
    this.libraryService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    this.getLibraryById(61);
  }
}
