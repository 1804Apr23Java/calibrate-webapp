import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAccountComponent } from './admin-add-account.component';
import {
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatTabsModule, MatInputModule, MatCardModule, MatGridListModule, MatCheckboxModule, MatDividerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminAddAccountComponent', () => {
  let component: AdminAddAccountComponent;
  let fixture: ComponentFixture<AdminAddAccountComponent>;

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
      declarations: [ AdminAddAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
