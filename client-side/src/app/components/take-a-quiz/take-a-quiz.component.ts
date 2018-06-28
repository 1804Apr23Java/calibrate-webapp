import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Library } from '../../models/library';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-take-a-quiz',
  templateUrl: './take-a-quiz.component.html',
  styleUrls: ['./take-a-quiz.component.css']
})
export class TakeAQuizComponent implements OnInit {

  maxQuestions = 0;
  currentlySelectedLibraries: Library[] = [];
  selectedLibrarySet: Library[] = [];
  quizName = '';
  questionFormControl = new FormControl('', [
    Validators.max(this.maxQuestions),
    Validators.min(0),
    Validators.required]);
  desiredNumberOfQuestions = 0;

  constructor(private gatewayService: GatewayService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openDialog(dataSet): void {
    const dialogRef = this.dialog.open(TakeAQuizAddDialogComponent, {
      width: '60%',
      height: '60%',
      data: this.selectedLibrarySet
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addToMaxQuestions(result);
      console.log(this.maxQuestions);
    });
  }

  addToMaxQuestions(result: Library): void {
    this.maxQuestions = this.maxQuestions + result.numberOfQuestions;
    this.questionFormControl = new FormControl('', [
      Validators.max(this.maxQuestions),
      Validators.min(0),
      Validators.required]);
  }

  deleteFromMaxQuestions(library: Library): void {
    this.maxQuestions = this.maxQuestions - library.numberOfQuestions;
    this.questionFormControl = new FormControl('', [
      Validators.max(this.maxQuestions),
      Validators.min(0),
      Validators.required]);
  }

  deleteSelectedLibrary(index, library): void {
    this.selectedLibrarySet.splice(index, 1);
    this.deleteFromMaxQuestions(library);
  }

  generateNewQuiz(): void {
    let idArray = new Array();
    for (const library of this.selectedLibrarySet) {
      idArray.push(library.libraryId);
    }
    idArray = [56]; //comment out later
    console.log('idArray ' + idArray + ' quizName ' + this.quizName + ' desired# ' + this.desiredNumberOfQuestions);
    this.gatewayService.generateQuiz(idArray, this.quizName, this.desiredNumberOfQuestions).subscribe(
      (quiz: Quiz) => {
        console.log('stringified quiz:' + JSON.stringify(quiz));
        localStorage.setItem('currentQuizId', JSON.stringify(quiz.quizId));
        this.router.navigate(['/quiz-session']);
      },
      error => console.log(`Save Quiz Id Error: ${error}`)
    );
  }

  continueExistingQuiz() {
    console.log('start existing quiz here');
    return;
  }

}



@Component({
  selector: 'app-take-a-quiz-add-dialog',
  templateUrl: './take-a-quiz-add-dialog.component.html',
  styleUrls: ['./take-a-quiz.component.css']
})
export class TakeAQuizAddDialogComponent implements OnInit {

  libraryList: Library[] = [];
  publicLibraryList: Library[] = [];

  maxQuestions = 0;

  constructor(private gatewayService: GatewayService,
  public dialogRef: MatDialogRef<TakeAQuizAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
  }

  ngOnInit() {
    this.getAllPublicLibraries();
    this.getUserLibraries();
  }

  getAllPublicLibraries(): void {
    this.gatewayService.getPublicLibraries().subscribe(
      (publicLibraryList: Library[]) => {
        this.publicLibraryList = publicLibraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getUserLibraries(): void {
    this.gatewayService.getLibrariesByAccountId(+sessionStorage.getItem('accountId')).subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  returnLibrary(library: Library): void {
    this.data.push(library);
    this.dialogRef.close(library);
  }
}
