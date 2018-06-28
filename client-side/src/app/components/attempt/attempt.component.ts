import { Component, OnInit, Inject } from '@angular/core';
import { Attempt } from '../../models/attempt';
import { Question } from '../../models/question';
import {MatTableDataSource} from '@angular/material';
import { GatewayService } from '../../services/gateway.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatRow} from '@angular/material';
import { QuizLogicService } from '../../services/quizlogic.service';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private gatewayService: GatewayService, private logicService: QuizLogicService, public dialog: MatDialog) { }

  public attempts: Attempt[];
  displayedColumns = ['name', 'date', 'score', 'view'];
  dataSource: MatTableDataSource<Attempt>;

  // THIS NEEDS TO BE "GET ATTEMPTS BY ID WHERE isComplete IS TRUE"
  getAttemptsById(id: number): void {
    this.gatewayService.getAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.dataSource = new MatTableDataSource(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  wasQuestionAnsweredCorrectly(question: Question): boolean {
    return this.logicService.wasQuestionAnsweredCorrectly(question);
  }

  ngOnInit() {
    this.getAttemptsById(+sessionStorage.getItem('accountId'));
  }

  openDialog(selectedAttempt: MatRow): void {
    const dialogRef = this.dialog.open(AttemptDialogComponent, {
      width: '80%', height: '90%',
      data: { selectedAttempt }
    });
    console.log(selectedAttempt);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-attempt-dialog',
  templateUrl: './attempt-dialog.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AttemptDialogComponent>,
    private logicService: QuizLogicService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  wasQuestionAnsweredCorrectly(question: Question): boolean {
    return this.logicService.wasQuestionAnsweredCorrectly(question);
  }

  getCorrectRowStyle(question: Question): Object {
    if (this.wasQuestionAnsweredCorrectly(question)) {
      return { 'background-color': '#ccffcc' };
    } else {
      return { 'background-color': '#ffcccc'};
    }
  }

  // returns a color for a number between 0-100 for styles
  // shades of red to yellow to green
  getPercentageColorStyle(score: number): Object {
    if (score <= 50) {
      return { 'background-color': '#ff0000' };
    } else if (score <= 60) {
      return { 'background-color': '#ff6600' };
    } else if (score <= 70) {
      return { 'background-color': '#ffff00' };
    } else if (score <= 90) {
      return { 'background-color': '#66ff66' };
    } else {
      return { 'background-color': '#00ff00' };
    }
  }
}
