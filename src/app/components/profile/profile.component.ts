import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private accountId: String = sessionStorage.getItem('accountId');
  constructor(private gatewayService: GatewayService, private router: Router) {}

  public account: Account;

  getAccountById(id: number): void {
    this.gatewayService.getAccountById(id).subscribe(
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
