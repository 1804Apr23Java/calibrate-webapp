import { TestBed, inject } from '@angular/core/testing';

import { QuizLogicService } from './quizlogic.service';

describe('QuizLogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizLogicService]
    });
  });

  it('should be created', inject([QuizLogicService], (service: QuizLogicService) => {
    expect(service).toBeTruthy();
  }));
});
