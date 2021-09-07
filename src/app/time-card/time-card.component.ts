import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-card',
  templateUrl: './time-card.component.html',
  styleUrls: ['./time-card.component.scss']
})
export class TimeCardComponent implements OnInit {
  @Input() value: string;
  @Input() text: string;

  constructor() {
    this.value = "";
    this.text = "";
  }

  ngOnInit(): void {
  }

}
