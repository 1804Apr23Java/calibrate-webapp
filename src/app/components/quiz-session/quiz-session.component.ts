import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../classes/quiz';

@Component({
  selector: 'app-quiz-session',
  templateUrl: './quiz-session.component.html',
  styleUrls: ['./quiz-session.component.css']
})
export class QuizSessionComponent implements OnInit {
  public quiz: Quiz;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.getQuizById();
  }

  getQuizById(): void {
    this.quizService.getQuizById().subscribe(
      (quiz: Quiz) => {
        this.quiz = quiz;
      },
      error => console.log(`Error: ${error}`)
    );
  }
}
