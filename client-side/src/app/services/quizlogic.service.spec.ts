import { TestBed, inject } from '@angular/core/testing';

import { QuizlogicService } from './quizlogic.service';

describe('QuizlogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizlogicService]
    });
  });

  it('should be created', inject([QuizlogicService], (service: QuizlogicService) => {
    expect(service).toBeTruthy();
  }));
});
