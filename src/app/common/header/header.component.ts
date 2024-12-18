import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuScrolled = false;
  isSidebarShowing = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100)
      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;
  }

  openSideBar() {
    this.isSidebarShowing = true;
  }
  closeSideBar() {
    this.isSidebarShowing = false;
  }

}
