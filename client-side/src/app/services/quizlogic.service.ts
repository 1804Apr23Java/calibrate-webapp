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

  // returns a color for a number between 0-100 for styles
  // shades of red to yellow to green
  public getPercentageColorStyle(score: number): Object {
    if (score <= 50) {
      return { 'background-color': '#ff0000' };
    } else if (score <= 60) {
      return { 'background-color': '#ff6600' };
    } else if (score <= 70) {
      return { 'background-color': '#ffff00' };
    } else if (score <= 90) {
      return { 'background-color': '#66ff66' };
    } else {
      return { 'background-color': '#00ff00' };
    }
  }
}
