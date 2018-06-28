import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-admin-add-account',
  templateUrl: './admin-add-account.component.html',
  styleUrls: ['./admin-add-account.component.css']
})
export class AdminAddAccountComponent implements OnInit {

  constructor(private gatewayService: GatewayService) { }

  email: string;
  password: string;
  firstname: string;
  lastname: string;
  account: Account;

  addNewAccount(): void {
    this.gatewayService.addNewAccount(this.email, this.password, this.firstname, this.lastname).subscribe(
      (returnedAccount: Account) => {
        this.account = returnedAccount;
      }, error => { console.log(`Error: ${JSON.stringify(error)}`); }
    );
  }

  ngOnInit() {
  }

}
