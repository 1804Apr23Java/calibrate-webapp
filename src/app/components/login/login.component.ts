import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../classes/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  email: string;
  password: string;
  account: Account;

  accountLogin(): void {
    this.accountService.accountLogin(this.email, this.password).subscribe(
      (returnedAccount: Account) => {
        // save response into object
        this.account = returnedAccount;

        // FOR TESTING - PRINT RETURNED ACCOUNT INFO
        console.log(this.account);

        // LOG IN FUNCTIONALITY HERE
        // start Session, save user Account somewhere, etc.

        // ROUTE TO USER PROFILE PAGE
        // this.router.navigate(['profile']);

      }, error => { console.log(`Error: ${error}`); }
    );
  }

  ngOnInit() {
  }

}
