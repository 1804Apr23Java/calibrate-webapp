import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  constructor(private router: Router) { }

  accountId: String;

  ngOnInit() {
  }

  ngDoCheck() {
    this.accountId = sessionStorage.getItem('accountId');
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
