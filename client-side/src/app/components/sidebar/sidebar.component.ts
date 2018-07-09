import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  setUserLibraries() {
    sessionStorage.setItem('getUserLibraries', 'true');
  }

  setPublicLibraries() {
    sessionStorage.setItem('getPublicLibraries', 'true');
  }

  ngOnInit() {
  }

}
