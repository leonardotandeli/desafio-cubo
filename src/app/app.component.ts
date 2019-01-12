import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   template: `
   
    <app-header></app-header>
    <app-slider></app-slider>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';
}
