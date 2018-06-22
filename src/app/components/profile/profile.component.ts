import { Component, OnInit } from '@angular/core';
import { Account } from '../../classes/account';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private accountId: String = sessionStorage.getItem('accountId');
  constructor(private accountService: AccountService, private router: Router) {}

  public account: Account = new Account();

  getAccountById(id: number): void {
    this.accountService.getAccountById(id).subscribe(
      (account: Account) => {
        this.account = account;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  ngOnInit() {
    if (this.accountId == null) {
      this.router.navigate(['login']);
    } else {
      this.getAccountById(+this.accountId);
    }
  }
}
