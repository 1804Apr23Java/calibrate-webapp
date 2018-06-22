import { Component, OnInit, OnDestroy } from '@angular/core';
import { Library } from '../../models/library';
import { MatPaginator, MatTableDataSource } from '@angular/material';
<<<<<<< HEAD:src/app/components/library/library.component.ts
import { MatPaginatorModule } from '@angular/material/paginator';
import { Question } from '../../classes/question';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import {PageEvent} from '@angular/material';
=======
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { GatewayService } from '../../services/gateway.service';
>>>>>>> 5feb8e1256269c9e8db39808dfe171a8d97e7115:client-side/src/app/components/library/library.component.ts


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  /*
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
  */
})



export class LibraryComponent implements OnInit, OnDestroy {

  public library: Library = new Library();
  private isPending: boolean;

  constructor(private gatewayService: GatewayService) { }

  // expandedElement: any;
  step = 0;
  questionNumber = 1;
  /*
  displayedColumns = ['number', 'question', 'difficulty'];
  dataSource: MatTableDataSource<Question>;

  isExpansionDetailRow: any;
  */

  getLibraryById(libraryId: number): void {
    this.gatewayService.getLibraryById(libraryId).subscribe(
      (library: Library) => {
        this.library = library;
        /*this.library.questions.sort((question1, question2) =>
          (question1.value.toLowerCase > question2.value.toLowerCase ? 1 : -1));
        this.dataSource = new MatTableDataSource(this.library.questions);
        const rows = [];
        this.library.questions.forEach(question => rows.push(question, { detailRow: true, question }));
        this.isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
        */
      },
      error => console.log(`Error: ${error}`)
    );
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.getLibraryById(+sessionStorage.getItem('libraryId'));
    this.isPending = sessionStorage.getItem('isPending') === 'true';
  }

  ngOnDestroy() {
    sessionStorage.removeItem('isPending');
  }
}
