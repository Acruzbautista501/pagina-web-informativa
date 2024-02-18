import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public active : boolean = false 
  public isHeaderFixed: boolean = false;

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 5;
    this.isHeaderFixed = offset > 10;
  }
}
