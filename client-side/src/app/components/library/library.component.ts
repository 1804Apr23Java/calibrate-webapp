import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Library } from '../../models/library';
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
  public data.question;
  public questionValue = data.question.value;
  public difficultyValue = data.question.difficulty;
  public difficultyMax: number = 5;
  public firstAnswer: String = data.question.answers[0].value;
  public secondAnswer: String = data.question.answers[1].value;
  public thirdAnswer: String = data.question.answers[2].value;
  public fourthAnswer: String = data.question.answers[3].value;
  public firstCheck: Boolean = data.question.answers[0].isCorrect;
  public secondCheck: Boolean = data.question.answers[1].isCorrect;
  public thirdCheck: Boolean = data.question.answers[2].isCorrect;
  public fourthCheck: Boolean = data.question.answers[3].isCorrect;

  constructor(
    public dialogRef: MatDialogRef<LibraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data.question.difficulty);  
      this.difficultyValue = data.question.difficulty;
      this.data.question = data.question;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveEdit(): void {
    console.log(data.question.questionId, this.questionValue, this.firstAnswer, this.firstCheck, this.secondAnswer, this.secondAnswer, this.thirdAnswer, this.thirdCheck,  this.fourthAnswer, this.fourthCheck, this.difficultyValue);
    console.log('Question Edited');
  }

}
