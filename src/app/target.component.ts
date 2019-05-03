import { Component } from '@angular/core';

@Component({
  selector: 'app-target',
  template: `
  <p>
    target works!
  </p>
  <a [routerLink]="'/home'">Home</a>
  `
})
export class TargetComponent {

  constructor() { }

}