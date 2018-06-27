import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuizLogicService {

  constructor() { }

  // returns true if more than one correct answer (for checkbox)
  // returns false if one correct answer (for radio buttons)
  public checkForMultipleCorrectAnswers(question: Question): boolean {
    let correctAnswers = 0;
    for (const answer of question.answers) {
      if (answer.isCorrect) {
        correctAnswers += 1;
      }
    }
    return correctAnswers > 1;
  }

  public wasQuestionAnsweredCorrectly(question: Question): boolean {
    for (const answer of question.answers) {
      if (answer.isCorrect !== answer.isSelected) {
        return false;
      }
    }
    return true;
  }

  public hasQuestionBeenAnswered(question: Question): boolean {
    for (const answer of question.answers) {
      if (answer.isSelected) {
        return true;
      }
    }
    return false;
  }
}
