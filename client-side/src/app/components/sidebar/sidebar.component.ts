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
    sessionStorage.removeItem('getPublicLibraries');
  }

  setPublicLibraries() {
    sessionStorage.setItem('getPublicLibraries', 'true');
    sessionStorage.removeItem('getUserLibraries');
  }

  ngOnInit() {
  }

}
