import { Component, OnInit, Inject } from '@angular/core';
import { Attempt } from '../../models/attempt';
import { Question } from '../../models/question';
import {MatTableDataSource} from '@angular/material';
import { GatewayService } from '../../services/gateway.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatRow} from '@angular/material';
<<<<<<< HEAD

=======
>>>>>>> 90c1770f5e2f231f9418c1e813d069c58229a6a0

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private gatewayService: GatewayService, public dialog: MatDialog) { }

  public attempts: Attempt[];
  displayedColumns = ['name', 'date', 'score', 'view'];
  dataSource: MatTableDataSource<Attempt>;

  // THIS NEEDS TO BE "GET ATTEMPTS BY ID WHERE isComplete IS TRUE"
  getAttemptsById(id: number): void {
    this.gatewayService.getAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.attempts = attempts.sort((attempt1, attempt2) => attempt1.createdDate - attempt2.createdDate);
        this.dataSource = new MatTableDataSource(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  wasQuestionAnsweredCorrectly(question: Question): boolean {
    for (const answer of question.answers) {
      if (answer.isCorrect !== answer.isSelected) {
        return false;
      }
    }
    return true;
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
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
