import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryComponent } from './components/library/library.component';
import { QuestionComponent } from './components/question/question.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TakeAQuizComponent } from './components/take-a-quiz/take-a-quiz.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AdminComponent,
    QuizzesComponent,
    LibraryListComponent,
    LibraryComponent,
    QuestionComponent,
    AttemptComponent,
    SidebarComponent,
    TakeAQuizComponent,
    QuizSessionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTabsModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
