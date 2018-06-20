import { Component, OnInit } from '@angular/core';
import { Library } from '../../models/library';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {
  public libraryList: Library[];

  constructor(private gatewayService: GatewayService, private router: Router) {}

  ngOnInit() {
    this.getPublicLibraries();
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
    this.router.navigate(['library']);
  }

}
