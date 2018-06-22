import { TestBed, async } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryComponent } from './components/library/library.component';
import { QuestionComponent } from './components/question/question.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TakeAQuizComponent } from './components/take-a-quiz/take-a-quiz.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { PendingLibraryListComponent } from './components/pending-library-list/pending-library-list.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileNavbarComponent } from './components/profile-navbar/profile-navbar.component';
import { AdminDefaultComponent } from './components/admin-default/admin-default.component';
import { AdminAddAccountComponent } from './components/admin-add-account/admin-add-account.component';
import { AdminDeactivateAccountComponent } from './components/admin-deactivate-account/admin-deactivate-account.component';

import { routes } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule,
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatDividerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatToolbarModule,
        MatTableModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatInputModule,
        MatCardModule,
        MatGridListModule,
        MatCheckboxModule,
        MatDividerModule,
        FormsModule
      ],
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
        PendingLibraryListComponent,
        SidebarAdminComponent,
        LoginComponent,
        ProfileNavbarComponent,
        AdminDefaultComponent,
        AdminAddAccountComponent,
        AdminDeactivateAccountComponent

      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to calibrate-clientside!');
  }));
});
