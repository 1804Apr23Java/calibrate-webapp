import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeactivateAccountComponent } from './admin-deactivate-account.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatTabsModule, MatInputModule,
  MatCardModule, MatGridListModule,
  MatCheckboxModule, MatDividerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('AdminDeactivateAccountComponent', () => {
  let component: AdminDeactivateAccountComponent;
  let fixture: ComponentFixture<AdminDeactivateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
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
      declarations: [ AdminDeactivateAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeactivateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
