import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isSpecial: boolean = true;
  paraColor: string = 'brown';

  onClick(x: string): void
  {
    alert("The phone number is: " + x);
  }
}
