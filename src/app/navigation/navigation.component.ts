import { Component, HostListener, OnInit } from '@angular/core';
import { NavItem } from './nav-item'
import { pages } from './pages'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pages: NavItem[] = pages;
  atTop: boolean = false;
  menuActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.checkScrollPos()
  }

  checkScrollPos(): void{
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    this.atTop = pos === 0;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.checkScrollPos()
  }

}
