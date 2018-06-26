import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
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

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

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
        MatDividerModule
       ],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
