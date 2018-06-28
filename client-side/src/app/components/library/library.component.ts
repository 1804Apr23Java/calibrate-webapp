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

  public library = new Library();
  private isPending: boolean;
  private isPrivate: string;

  constructor(private gatewayService: GatewayService, public dialog: MatDialog) { }


  getLibraryById(libraryId: number): void {
    this.gatewayService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getQuestionsByLibraryId(libraryId: number): void {
    this.gatewayService.getQuestionsByLibraryId(libraryId).subscribe(
      (listOfQuestions: Question[]) => {
        this.library.questions = listOfQuestions;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  deleteQuestion(index) {
    this.library.questions.splice(index, 1);
  }

  addNewQuestion(): void {
    const question: Question = {
      questionId: null,
      value: '',
      difficulty: 1,
      libraryId: this.library.libraryId,
      answers: []
    };
    this.library.questions.push(question);
  }

  openDialog(question: Question): void {
    const dialogRef = this.dialog.open(LibraryDialogComponent, {
      width: '80%',
      height: '80%',
      data: { question }
    });
  }

  submitForApproval(): void {

  }

  ngOnInit() {
    this.getLibraryById(+sessionStorage.getItem('libraryId'));
    this.getQuestionsByLibraryId(+sessionStorage.getItem('libraryId'));
    this.isPending = sessionStorage.getItem('isPending') === 'true';
    this.isPrivate = sessionStorage.getItem('getUserLibraries');
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

  public difficultyMax = 5;
  public newAnswer: Boolean = false;
  public newIndex: number;
  public difficulty = 1;

  constructor(
    private gatewayService: GatewayService,
    public dialogRef: MatDialogRef<LibraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newIndex = 0;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteAnswer(index) {
    this.data.question.answers.splice(index, 1);
  }

  appendAnswer() {
    const answer: Answers = {
      answerId: null,
      isCorrect: false,
      value: '',
      questionId: this.data.question.questionId,
      isSelected: false,
    };
    this.data.question.answers.push(answer);
  }

  saveEdit(questionId, questionValue): void {
    if (questionId) {
      this.gatewayService.updateQuestion(questionId, questionValue).subscribe((question: Question) => {}, error => console.log(`Error: ${error}`));
      this.saveOrUpdateAnswers();
    } else {
      this.gatewayService.submitNewQuestion(questionValue, +sessionStorage.getItem('libraryId'), this.difficulty).subscribe(
      (question: Question) => {
        this.data.question.questionId = question.questionId;
        this.saveOrUpdateAnswers();
      },
      error => console.log(`Error: ${error}`)
      );
    }

  }

  saveOrUpdateAnswers() {
    for (let x of this.data.question.answers) {
      if (x.answerId == null) {
        this.gatewayService.addNewAnswer(x.value, x.isCorrect).subscribe(
            (answer: Answers) => {console.log(answer)}, error => console.log(`Error: ${error}`));
      } else {
        this.gatewayService.editAnswer(x.answerId, x.value, x.isCorrect, this.data.question.questionId).subscribe(
                (answer: Answers) => {console.log(answer)}, error => console.log(`Error: ${error}`));
      }
    }
  }

}
