import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  public quiz: Quiz;
  public currentQuestionIndex: number;

  constructor(private gatewayService: GatewayService) { }

  ngOnInit() {
    this.getQuizById(122);
    this.currentQuestionIndex = 0;
  }

  getQuizById(id: number): void {
    this.gatewayService.getQuizById(id).subscribe(
      (quiz: Quiz) => {
        this.quiz = quiz;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  // currentQuestionIndex manipulation
  setQuestion(index: number): void {
    this.currentQuestionIndex = index;
  }

  firstQuestion(): void {
    this.currentQuestionIndex = 0;
  }

  prevQuestion(): void {
    this.currentQuestionIndex--;
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
  }

  lastQuestion(): void {
    this.currentQuestionIndex = this.quiz.questions.length - 1;
  }
}
