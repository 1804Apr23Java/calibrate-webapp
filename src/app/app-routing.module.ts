import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { QuestionComponent } from './components/question/question.component';
import { TakeAQuizComponent } from './components/take-a-quiz/take-a-quiz.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { PendingLibraryListComponent } from './components/pending-library-list/pending-library-list.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'attempt', component: AttemptComponent },
  { path: 'login', component: LoginComponent },
  { path: 'library-list', component: LibraryListComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'quiz-session', component: QuizSessionComponent },
  { path: 'admin',
    component: AdminComponent,
    children: [
      {path : 'pending-library-list', component: PendingLibraryListComponent }
    ]  },
  { path: 'quizzes',
    component: QuizzesComponent,
    children: [
      { path: 'my-libraries', component: LibraryListComponent },
      { path: 'public-libraries', component: LibraryListComponent },
      { path: 'pending-libraries', component: LibraryListComponent },
      { path: 'take-a-quiz', component: TakeAQuizComponent },
      { path: 'quiz-attempts', component: AttemptComponent },
      { path: 'library', component: LibraryComponent },
    ]  },
  { path: '**', redirectTo: 'profile' }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
