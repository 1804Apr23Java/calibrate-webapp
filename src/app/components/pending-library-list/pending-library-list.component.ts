import { Component, OnInit } from '@angular/core';
import { Library } from '../../classes/library';
import { LibraryListService } from '../../services/library-list.service';

@Component({
  selector: 'app-pending-library-list',
  templateUrl: './pending-library-list.component.html',
  styleUrls: ['./pending-library-list.component.css']
})
export class PendingLibraryListComponent implements OnInit {

  public libraryList: Library[];

  constructor(private libraryService: LibraryListService) {}

  ngOnInit() {
    this.getPendingLibraries();
  }
  getPendingLibraries(): void {
    this.libraryService.getPendingLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }
}
