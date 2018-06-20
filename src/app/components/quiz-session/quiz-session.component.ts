import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../classes/quiz';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  public quiz: Quiz;

  constructor(private gatewayService: GatewayService) { }

  ngOnInit() {
    this.getQuizById(122);
  }

  getQuizById(id: number): void {
    this.gatewayService.getQuizById(id).subscribe(
      (quiz: Quiz) => {
        this.quiz = quiz;
      },
      error => console.log(`Error: ${error}`)
    );
  }
}
