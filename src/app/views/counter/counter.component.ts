import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: number;
  constructor() {
    this.count = 0;
  }

  ngOnInit(): void {}
  addCount() {
    this.count++;
  }
}
