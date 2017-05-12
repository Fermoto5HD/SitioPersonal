import { Component } from '@angular/core';

@Component({
  selector: 'FM5-site',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class AppComponent {
  title = 'Fermoto5HD';
  meta = {
    "title": "Fermoto5HD",
    "description": "New site."
  };

  myEvent(event) {
    console.log(event);
  }
}
