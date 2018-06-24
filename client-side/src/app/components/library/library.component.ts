import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Library } from '../../models/library';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Question } from '../../models/question';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material';
import { GatewayService } from '../../services/gateway.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})

export class LibraryComponent implements OnInit, OnDestroy {

  public library: Library = new Library();
  private isPending: boolean;

  constructor(private gatewayService: GatewayService, public dialog: MatDialog) { }

  step = 0;
  questionNumber = 1;
  customCollapsedHeight: String = '80px';


  getLibraryById(libraryId: number): void {
    this.gatewayService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LibraryDialogComponent, {
      width: '250px',
      data: {}
    });
  }

  ngOnInit() {
    this.getLibraryById(+sessionStorage.getItem('libraryId'));
    this.isPending = sessionStorage.getItem('isPending') === 'true';
  }

  ngOnDestroy() {
    sessionStorage.removeItem('isPending');
  }
}

@Component({
  selector: 'app-library-dialog',
  templateUrl: './library.component.questions.dialog.html',
})
export class LibraryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LibraryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
