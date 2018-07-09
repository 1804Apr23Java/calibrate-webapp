import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSessionComponent } from './quiz-session.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatExpansionModule, MatToolbarModule,
  MatTableModule, MatButtonModule,
  MatListModule, MatIconModule,
  MatRadioModule, MatAutocompleteModule,
  MatTabsModule, MatInputModule,
  MatCardModule, MatGridListModule,
  MatCheckboxModule, MatDividerModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { PrismModule } from '@ngx-prism/core';

describe('QuizSessionComponent', () => {
  let component: QuizSessionComponent;
  let fixture: ComponentFixture<QuizSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientModule,
        BrowserModule, BrowserAnimationsModule,
        RouterTestingModule, MatExpansionModule,
        MatToolbarModule, MatTableModule,
        MatButtonModule, MatListModule,
        MatIconModule, MatRadioModule,
        MatAutocompleteModule, MatTabsModule,
        MatInputModule, MatCardModule,
        MatGridListModule, MatCheckboxModule,
        MatDividerModule, PrismModule
       ],
      declarations: [ QuizSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
