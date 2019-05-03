import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  template: `
  <p>
    <p-tieredMenu [model]="menuModel"></p-tieredMenu>
  </p>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  readonly menuModel: MenuItem[] = [
    {
      label: 'Target',
      routerLink: '/target'
    }
  ]

  ngOnInit() {
  }

}