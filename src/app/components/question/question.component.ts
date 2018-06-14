import { Component, OnInit } from '@angular/core';
import { Question } from '../../classes/question';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  public question: Question = new Question();

  getQuestionById(id: number): void {
    this.questionService.getQuestionById(id).subscribe(
      (question: Question) => {
        this.question = question;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    this.getQuestionById(265);
  }

}
