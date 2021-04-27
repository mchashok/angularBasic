import { Component, OnInit } from '@angular/core';
import { navLists } from "../config";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navLists;
  constructor(
  ) {
    this.navLists = navLists;
   }

  ngOnInit() {
  }

}
