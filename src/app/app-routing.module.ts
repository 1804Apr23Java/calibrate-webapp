import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { QuestionComponent } from './components/question/question.component';


const routes: Routes = [
  { path: 'attempt', component: AttemptComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'libraryList', component: LibraryListComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'quizzes', component: QuizzesComponent },
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
