import { Component } from '@angular/core';
import { NavItem } from './navigation/nav-item'
import { pages } from './navigation/pages'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alex Nelson';
  pages: NavItem[] = pages;
}
