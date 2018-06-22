import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeactivateAccountComponent } from './admin-deactivate-account.component';

describe('AdminDeactivateAccountComponent', () => {
  let component: AdminDeactivateAccountComponent;
  let fixture: ComponentFixture<AdminDeactivateAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
