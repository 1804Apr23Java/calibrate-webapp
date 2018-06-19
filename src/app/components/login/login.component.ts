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
        this.account = returnedAccount;
        console.log(this.account);

        // start Session, save user Account somewhere, etc.
        sessionStorage.setItem('accountId', this.account.accountId.toString());
        this.router.navigate(['profile/' + this.account.accountId.toString()]);

      }, error => { console.log(`Error: ${JSON.stringify(error)}`); }
    );
  }

  ngOnInit() {
  }

}
