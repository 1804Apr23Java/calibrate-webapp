import { Component, OnInit } from '@angular/core';
import { AttemptService } from '../../services/attempt.service';
import { Attempt } from '../../classes/attempt';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent implements OnInit {

  constructor(private attemptService: AttemptService) { }

  public attempts: Attempt[];
  public attemptsString: string;

  getAttemptsById(id: number): void {
    this.attemptService.getAttemptsById(id).subscribe(
      (attempts: Attempt[]) => {
        this.attempts = attempts.sort((attempt1, attempt2) => attempt1.createdDate - attempt2.createdDate);
        this.attemptsString = JSON.stringify(attempts);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    this.getAttemptsById(44);
  }

}
