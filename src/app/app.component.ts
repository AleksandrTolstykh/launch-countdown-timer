import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'launch-countdown-timer';
  days = 9;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
    let interval = setInterval(() => {
      if (this.seconds === 0) {
        this.seconds = 59;
        if (this.minutes === 0) {
          this.minutes = 59;
          if (this.hours === 0) {
            this.hours = 23;
            if (this.days === 0) {
              clearInterval(interval);
              this.hours = 0;
              this.minutes = 0;
              this.seconds = 0;
            } else {
              this.days--;
            }
          } else {
            this.hours--;
          }
        } else {
          this.minutes--;
        }
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  getNumber(value: number): string {
    if (value < 10) {
      return "0" + value.toString();
    } else {
      return value.toString();
    }
  }
}
