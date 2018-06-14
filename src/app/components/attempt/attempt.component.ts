import { Component, OnInit } from '@angular/core';
import { AttemptService } from '../../services/attempt.service';
import { Attempt } from '../../classes/attempt';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private attemptService: AttemptService) { }

  public attempts: Attempt[];
  displayedColumns = ['name', 'date', 'score'];
  dataSource: MatTableDataSource<Attempt>;

  getAttemptsById(id: number): void {
    this.attemptService.getAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.attempts = attempts.sort((attempt1, attempt2) => attempt1.createdDate - attempt2.createdDate);
        this.dataSource = new MatTableDataSource(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    this.getAttemptsById(44);
  }

}
