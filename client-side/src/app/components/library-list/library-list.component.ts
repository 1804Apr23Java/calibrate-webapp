import { Component, OnInit, OnDestroy, DoCheck, Inject } from '@angular/core';
import { Library } from '../../models/library';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit, DoCheck {
  public libraryList: Library[];
  public userLibraries: string;
  public publicLibraries: string;

  constructor(private gatewayService: GatewayService, private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.userLibraries = sessionStorage.getItem('getUserLibraries');
    this.publicLibraries = sessionStorage.getItem('getPublicLibraries');

    if (sessionStorage.getItem('getUserLibraries')) {
      this.getUserLibraries(+sessionStorage.getItem('accountId'));
    } else if (sessionStorage.getItem('getPublicLibraries')) {
      this.getPublicLibraries();
    } /* else {
      this.router.navigate(['profile']);
    } */
   }

/*
  ngDoCheck() {
    sessionStorage.removeItem('getUserLibraries');
    sessionStorage.removeItem('getPublicLibraries');
  }
*/
  getUserLibraries(accountId: number): void {
    this.gatewayService.getLibrariesByAccountId(accountId).subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getPublicLibraries(): void {
    this.gatewayService.getPublicLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  getLibrary(libraryId: number) {
    sessionStorage.setItem('libraryId', libraryId.toString());
    this.router.navigate(['quizzes/library']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewLibraryDialogComponent, {
      width: '50%', height: '400px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-new-library-dialog',
  templateUrl: './new-library-dialog.component.html',
  styleUrls: ['./library-list.component.css']
})
export class NewLibraryDialogComponent {

  newLibraryName = '';

  constructor(
    public dialogRef: MatDialogRef<NewLibraryDialogComponent>,
    private gatewayService: GatewayService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewLibrary(): void {
    this.gatewayService.addNewLibrary(+sessionStorage.getItem('accountId'), this.newLibraryName);
  }

}

