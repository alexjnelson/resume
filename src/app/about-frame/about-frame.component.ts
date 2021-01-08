import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-frame',
  templateUrl: './about-frame.component.html',
  styleUrls: ['./about-frame.component.css']
})
export class AboutFrameComponent implements OnInit {
  url!: string;
  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.url = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'assets/images/abt-svg-dark.svg' : 'assets/images/abt-svg.svg';
    }
    else {
      this.url = 'assets/images/abt-svg.svg'
    }
  }

  // TO DO: Add resume download
  getResume(): void{
    console.log(document.getElementById("contact"));
    document.getElementById("contact")?.scrollIntoView();
  }

}
