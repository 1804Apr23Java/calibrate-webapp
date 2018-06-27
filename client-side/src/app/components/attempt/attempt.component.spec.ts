import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptComponent } from './attempt.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MatExpansionModule, MatToolbarModule,
  MatTableModule, MatButtonModule,
  MatListModule, MatIconModule,
  MatRadioModule, MatAutocompleteModule,
  MatTabsModule, MatInputModule,
  MatCardModule, MatGridListModule,
  MatCheckboxModule, MatDividerModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatRow} from '@angular/material';

describe('AttemptComponent', () => {
  let component: AttemptComponent;
  let fixture: ComponentFixture<AttemptComponent>;

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
        MatDividerModule, MatDialogModule],
      declarations: [ AttemptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
