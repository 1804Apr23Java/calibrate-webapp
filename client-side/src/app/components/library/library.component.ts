import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Library } from '../../models/library';
import { Answers } from '../../models/question';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Question } from '../../models/question';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material';
import { GatewayService } from '../../services/gateway.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})

export class LibraryComponent implements OnInit, OnDestroy {

  public library: Library = new Library();
  private isPending: boolean;
  

  constructor(private gatewayService: GatewayService, public dialog: MatDialog) { }

  step = 0;
  questionNumber = 1;
  customCollapsedHeight: String = '80px';


  getLibraryById(libraryId: number): void {
    this.gatewayService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  openDialog(question: Question): void {
    let dialogRef = this.dialog.open(LibraryDialogComponent, {
      width: '80%',
      height: '80%',
      data: { question }
    });
  }

  ngOnInit() {
    this.getLibraryById(+sessionStorage.getItem('libraryId'));
    this.isPending = sessionStorage.getItem('isPending') === 'true';
  }

  ngOnDestroy() {
    sessionStorage.removeItem('isPending');
  }
}

@Component({
  selector: 'app-library-dialog',
  templateUrl: './library-dialog.component.html',
  styleUrls: ['./library.component.css'],  
  encapsulation: ViewEncapsulation.None,
})
export class LibraryDialogComponent {

  public difficultyMax: number = 5;
  public newAnswer: Boolean = false;
  public newIndex: number;
  public newerAnswer: Answers;

  constructor(
    public dialogRef: MatDialogRef<LibraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newIndex = 0;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addAnswer() {
    this.newAnswer = true;
    console.log('Hello');
  }

  appendAnswer() {
    this.data.question.answers.push(new Answers());
    console.log(this.data.question.answers)
  }

  saveEdit(): void {
    console.log(this.data.question);
    console.log('Question Edited');
  }

}
