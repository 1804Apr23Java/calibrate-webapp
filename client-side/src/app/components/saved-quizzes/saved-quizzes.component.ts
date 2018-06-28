import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Attempt } from '../../models/attempt';
import { MatTableDataSource, MatRow } from '@angular/material';

@Component({
  selector: 'app-saved-quizzes',
  templateUrl: './saved-quizzes.component.html',
  styleUrls: ['./saved-quizzes.component.css']
})
export class SavedQuizzesComponent implements OnInit {

  public attempts: Attempt[];
  displayedColumns = ['name', 'date', 'score', 'view'];
  dataSource: MatTableDataSource<Attempt>;

  constructor(private gatewayService: GatewayService) { }

  ngOnInit() {
    this.getAttemptsById(+sessionStorage.getItem('accountId'));
  }

  // THIS NEEDS TO BE "GET ATTEMPTS BY ID WHERE isComplete IS FALSE"
  getAttemptsById(id: number): void {
    this.gatewayService.getIncompleteAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.dataSource = new MatTableDataSource(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }
  // ROUTE TO quiz-session WHILE FETCHING QUIZ
  continueQuiz(selectedAttempt: MatRow): void {
    console.log(selectedAttempt);
  }

}
