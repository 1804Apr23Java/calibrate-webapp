import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLibraryListComponent } from './pending-library-list.component';

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


describe('PendingLibraryListComponent', () => {
  let component: PendingLibraryListComponent;
  let fixture: ComponentFixture<PendingLibraryListComponent>;

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
      declarations: [ PendingLibraryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
