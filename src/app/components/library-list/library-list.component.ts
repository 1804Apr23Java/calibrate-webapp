import { Component, OnInit } from '@angular/core';
import { LibraryListService } from '../../services/library-list.service';
import { Library } from '../../classes/library';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  public libraryList: Library[];

  constructor(private libraryService: LibraryListService) { }

  ngOnInit() {
    this.getAllLibrary();
  }
  getAllLibrary(): void {
  this.libraryService.getLibrary().subscribe(
    (libraryList: Library[]) => {
      this.libraryList = libraryList;
    },
    error => console.log(`Error: ${error}`)
  );
}

}
/*  getAccountById(id: number): void {
    this.accountService.getAccountById(id).subscribe(
      (account: Account) => {
        this.account = account;
        this.acString = JSON.stringify(this.account);
      },
      error => console.log(`Error: ${error}`)
    );
  }*/
