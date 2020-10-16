import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-coding',
  templateUrl: './first-coding.component.html',
  styleUrls: ['./first-coding.component.scss']
})
export class FirstCodingComponent implements OnInit {

  constructor() { }

  inputValue: string = 'initial string';
  today: Date = new Date();
  showWarning: boolean = false;

  deci1: number = 123.234234
  deci2: number = 0.1;

  ngOnInit(): void {
  }

  warnUser(): void {
    this.showWarning = !this.showWarning;
  }

}
