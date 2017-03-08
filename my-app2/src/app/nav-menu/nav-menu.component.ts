import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
   myList = [{id:"Israel news"},{id:"Word news"},{id:"Sport"},{id:"Cars"}];
  constructor() { }

  ngOnInit() {
  }

}
