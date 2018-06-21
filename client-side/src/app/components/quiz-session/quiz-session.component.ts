import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../models/quiz';
import { Question } from '../../models/question';

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
    this.getQuizById(47);
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

  // returns true if more than one correct answer (for checkbox)
  // returns false if one correct answer (for radio buttons)
  checkForMultipleCorrectAnswers(question: Question): boolean {
    let correctAnswers = 0;
    for (const answer of question.answers) {
      if (answer.isCorrect) {
        correctAnswers += 1;
      }
    }
    return correctAnswers > 1;
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
