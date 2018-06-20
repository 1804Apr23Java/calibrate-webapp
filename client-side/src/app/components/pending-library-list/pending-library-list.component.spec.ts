import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLibraryListComponent } from './pending-library-list.component';

describe('PendingLibraryListComponent', () => {
  let component: PendingLibraryListComponent;
  let fixture: ComponentFixture<PendingLibraryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
