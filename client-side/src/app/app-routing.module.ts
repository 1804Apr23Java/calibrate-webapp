import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { TakeAQuizComponent } from './components/take-a-quiz/take-a-quiz.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { PendingLibraryListComponent } from './components/pending-library-list/pending-library-list.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDefaultComponent } from './components/admin-default/admin-default.component';
import { AdminAddAccountComponent } from './components/admin-add-account/admin-add-account.component';
import { AdminDeactivateAccountComponent } from './components/admin-deactivate-account/admin-deactivate-account.component';
import { SavedQuizzesComponent } from './components/saved-quizzes/saved-quizzes.component';


export const routes: Routes = [
  { path: 'attempt', component: AttemptComponent },
  { path: 'login', component: LoginComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library-list', component: LibraryListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'quiz-session', component: QuizSessionComponent },
  { path: 'admin',
    component: AdminComponent,
    children: [
      {path : 'admin-default', component: AdminDefaultComponent },
      {path : 'admin-add-account', component: AdminAddAccountComponent },
      {path : 'admin-deactivate-account', component: AdminDeactivateAccountComponent },
      {path: 'library', component: LibraryComponent },
      {path : 'pending-library-list', component: PendingLibraryListComponent }
    ]  },
  { path: 'quizzes',
    component: QuizzesComponent,
    children: [
      { path: 'library', component: LibraryComponent },
      { path: 'my-libraries', component: LibraryListComponent },
      { path: 'public-libraries', component: LibraryListComponent },
      { path: 'pending-libraries', component: LibraryListComponent },
      { path: 'take-a-quiz', component: TakeAQuizComponent },
      { path: 'quiz-attempts', component: AttemptComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'saved-quizzes', component: SavedQuizzesComponent }
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
