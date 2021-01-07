import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-frame',
  templateUrl: './header-frame.component.html',
  styleUrls: ['./header-frame.component.css']
})
export class HeaderFrameComponent implements OnInit {
  height: number = window.innerHeight;
  constructor() { }

  ngOnInit(): void {
  }

  onResize(): void{
    this.height = window.innerHeight;
  }

}
