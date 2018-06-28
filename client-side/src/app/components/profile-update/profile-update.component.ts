import { Component, OnInit } from '@angular/core';
import { GatewayService } from '../../services/gateway.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  constructor(private gatewayService: GatewayService) { }

  account: Account = {
    firstName: '',
    lastName: '',
    password: '',
    email: ''
    };
  private accountId: String = sessionStorage.getItem('accountId');
  oldPassword: string;
  newPassword: string;

  getAccountById(id: number): void {
    this.gatewayService.getAccountById(id).subscribe(
      (account: Account) => {
        this.account = account;
      },
      error => console.log(`Error: ${error}`)
    );
  }

  updateProfile(): void {
    console.log(this.accountId, this.account.firstName, this.account.lastName);
    this.gatewayService.updateFirstName(this.accountId, this.account.firstName).subscribe(
          (account: Account) => {console.log(account)}, error => console.log(`Error: ${error}`));
    this.gatewayService.updateLastName(this.accountId, this.account.lastName).subscribe(
          (account: Account) => {console.log(account)}, error => console.log(`Error: ${error}`));
  }

  ngOnInit() {
    this.getAccountById(+this.accountId);
  }



}
