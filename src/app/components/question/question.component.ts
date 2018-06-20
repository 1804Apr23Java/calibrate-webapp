import { Component, OnInit } from '@angular/core';
import { Question } from '../../classes/question';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private gatewayService: GatewayService) { }

  public question: Question = new Question();

  getQuestionById(id: number): void {
    this.gatewayService.getQuestionById(id).subscribe(
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
