import { Component, OnInit } from '@angular/core';
import { Account } from '../../classes/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountService: AccountService) { }

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
    this.getAccountById(11);
  }

}
