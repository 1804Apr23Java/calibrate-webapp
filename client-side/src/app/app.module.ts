import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrismModule } from '@ngx-prism/core'
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
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { GatewayService } from './services/gateway.service';
import { HttpClientModule } from '@angular/common/http';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryComponent } from './components/library/library.component';
import { QuestionComponent } from './components/question/question.component';
import { AttemptComponent } from './components/attempt/attempt.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TakeAQuizComponent } from './components/take-a-quiz/take-a-quiz.component';
import { QuizSessionComponent } from './components/quiz-session/quiz-session.component';
import { PendingLibraryListComponent } from './components/pending-library-list/pending-library-list.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material';
import { ProfileNavbarComponent } from './components/profile-navbar/profile-navbar.component';
import { AdminDefaultComponent } from './components/admin-default/admin-default.component';
import { AdminAddAccountComponent } from './components/admin-add-account/admin-add-account.component';
import { AdminDeactivateAccountComponent } from './components/admin-deactivate-account/admin-deactivate-account.component';

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
    PendingLibraryListComponent,
    SidebarAdminComponent,
    LoginComponent,
    ProfileNavbarComponent,
    AdminDefaultComponent,
    AdminAddAccountComponent,
    AdminDeactivateAccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    PrismModule
  ],
  providers: [GatewayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
