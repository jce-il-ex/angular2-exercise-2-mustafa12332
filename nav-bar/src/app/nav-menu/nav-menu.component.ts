import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }
navItem=[{ item:"Home"}, {item:"Profile"},{item:"About Us"},{ item:"Contact Us"}];
  ngOnInit() {
  }

}
