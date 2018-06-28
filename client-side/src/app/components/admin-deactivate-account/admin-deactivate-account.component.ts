import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Account } from '../../models/account';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-admin-deactivate-account',
  templateUrl: './admin-deactivate-account.component.html',
  styleUrls: ['./admin-deactivate-account.component.css']
})
export class AdminDeactivateAccountComponent implements OnInit {

  constructor(private gatewayService: GatewayService) { }

  allAccountsList: Account[];
  displayedColumns = ['Email', 'First Name', 'Last Name', 'Admin'];
  dataSource: MatTableDataSource<Account>;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // DEACTIVATE ACCOUNT FROM GATEWAY SERVICE
  deactivateAccount(): boolean {
    return false;
  }

  getAllAccounts(): void {
    this.gatewayService.getAllAccounts().subscribe(
      (returnedAccountsList: Account[]) => {
        this.allAccountsList = returnedAccountsList;
        this.dataSource = new MatTableDataSource(returnedAccountsList);
        console.log(this.allAccountsList);
      },
      error => console.log(`Error: ${error}`)
    );
  }

  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //       this.selection.clear() :
  //       this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  ngOnInit() {
    this.getAllAccounts();
  }

}
