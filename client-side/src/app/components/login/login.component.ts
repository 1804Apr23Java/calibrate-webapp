import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private gatewayService: GatewayService, private router: Router) { }

  email: string;
  password: string;
  account: Account;

  accountLogin(): void {
    this.gatewayService.accountLogin(this.email, this.password).subscribe(
      (returnedAccount: Account) => {
        this.account = returnedAccount;

        // start Session, save user Account somewhere, etc.
        sessionStorage.setItem('accountId', this.account.accountId.toString());
        this.router.navigate(['profile/' + this.account.accountId.toString()]);

      }, error => { console.log(`Error: ${JSON.stringify(error)}`); }
    );
  }

  ngOnInit() {
  }

}
