import { Component, OnInit } from '@angular/core';
import { Library } from '../../classes/library';
import { LibraryService } from '../../services/library.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Question } from '../../classes/question';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  public library: Library = new Library();

  constructor(private libraryService: LibraryService) { }

  step = 0;
  questionNumber = 1;
  displayedColumns = ['number', 'question', 'difficulty'];
  dataSource: MatTableDataSource<Question>;

  getLibraryById(libraryId: number): void {
    this.libraryService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
        this.dataSource = new MatTableDataSource(this.library.questions);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.getLibraryById(61);
  }
}
