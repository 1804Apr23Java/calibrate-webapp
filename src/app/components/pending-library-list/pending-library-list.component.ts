import { Component, OnInit } from '@angular/core';
import { Library } from '../../classes/library';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-pending-library-list',
  templateUrl: './pending-library-list.component.html',
  styleUrls: ['./pending-library-list.component.css']
})
export class PendingLibraryListComponent implements OnInit {

  public libraryList: Library[];

  constructor(private gatewayService: GatewayService) {}

  ngOnInit() {
    this.getPendingLibraries();
  }
  getPendingLibraries(): void {
    this.gatewayService.getPendingLibraries().subscribe(
      (libraryList: Library[]) => {
        this.libraryList = libraryList;
      },
      error => console.log(`Error: ${error}`)
    );
  }
}
