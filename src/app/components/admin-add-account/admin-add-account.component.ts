import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-add-account',
  templateUrl: './admin-add-account.component.html',
  styleUrls: ['./admin-add-account.component.css']
})
export class AdminAddAccountComponent implements OnInit {

  constructor() { }

  email: string;
  password: string;
  firstname: string;
  lastname: string;

  ngOnInit() {
  }

}
