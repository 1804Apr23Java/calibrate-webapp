import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Library } from '../../models/library';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';

@Component({
  selector: 'app-take-a-quiz',
  templateUrl: './take-a-quiz.component.html',
  styleUrls: ['./take-a-quiz.component.css']
})
export class TakeAQuizComponent implements OnInit {

  libraryList: Library[] = [];
  libraryListString: String;
  publicLibraryList: Library[] = [];
  publicLibraryListString: String;

  currentlySelectedLibraries: Library[] = [];
  maxQuestions: number = 0;

  newName: any = "";
  newQuiz: Quiz;
  newLibraryIds: number[] = [];
  newQuizLength: number;

  constructor(private gatewayService: GatewayService, public dialog: MatDialog) { }

  ngOnInit() {
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

  openDialog(): void {
    this.dialog.open(TakeAQuizAddDialogComponent, {
      width: '80%',
      height: '80%'
    });
  }

}



@Component({
  selector: 'app-take-a-quiz-add-dialog',
  templateUrl: './take-a-quiz-add-dialog.component.html',
  styleUrls: ['./take-a-quiz.component.css']
})
export class TakeAQuizAddDialogComponent {

  constructor() { }
  

}
