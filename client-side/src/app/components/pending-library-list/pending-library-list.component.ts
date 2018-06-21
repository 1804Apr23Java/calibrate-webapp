import { Component, OnInit } from '@angular/core';
import { Library } from '../../models/library';
import { GatewayService } from '../../services/gateway.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-library-list',
  templateUrl: './pending-library-list.component.html',
  styleUrls: ['./pending-library-list.component.css']
})
export class PendingLibraryListComponent implements OnInit {

  public libraryList: Library[];


  constructor(private gatewayService: GatewayService, private router: Router) {}

  ngOnInit() {
    this.getPendingLibraries();
  }
  getPendingLibraries(): void {
    this.gatewayService.getPendingLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList.sort((library1, library2) => library1.name.localeCompare(library2.name));
      },
      error => console.log(`Error: ${error}`)
    );
  }
  getLibrary(libraryId: number) {
    sessionStorage.setItem('libraryId', libraryId.toString());
    sessionStorage.setItem('isPending', true.toString());
    this.router.navigate(['library']);
  }

}
