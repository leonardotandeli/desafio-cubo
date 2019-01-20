import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   template: `
   
    <app-header></app-header>
    <app-slider></app-slider>
    <app-services></app-services>
    <app-about-us></app-about-us>
        <app-how-it-works></app-how-it-works>
    <app-form-home></app-form-home>
    <app-data-information></app-data-information>
    <app-footer></app-footer>
    
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';
}
