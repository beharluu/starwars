import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened = true;

  constructor() { }

  ngOnInit(): void {
    this.checkSideNavStatus(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event.target.innerWidth);
    this.checkSideNavStatus(event.target.innerWidth);
  }

  checkSideNavStatus(width: any) {
    console.log(width);
    if ( width < 768 ) {
      this.opened = false;
    }
  }

}
