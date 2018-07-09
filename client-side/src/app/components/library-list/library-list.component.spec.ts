import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListComponent } from './library-list.component';
import { RouterTestingModule } from '@angular/router/testing';
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

describe('LibraryListComponent', () => {
  let component: LibraryListComponent;
  let fixture: ComponentFixture<LibraryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule,
        BrowserModule, BrowserAnimationsModule,
        RouterTestingModule, MatExpansionModule,
        MatToolbarModule, MatTableModule,
        MatButtonModule, MatListModule,
        MatIconModule, MatRadioModule,
        MatAutocompleteModule, MatTabsModule,
        MatInputModule, MatCardModule,
        MatGridListModule, MatCheckboxModule,
        MatDividerModule],
      declarations: [ LibraryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
