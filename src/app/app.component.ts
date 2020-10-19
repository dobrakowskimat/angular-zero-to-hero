import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title: string = 'angular-zero-to-hero';
  flag: boolean = true;

  user: User = {
    login: 'SuperPlayer3000',
    name: 'avanade',
    lastName:'Player',
    age: 26
  };

  titles: string[] = ['string1', 'dupa', 'it works'];

  ngOnInit() {

  }

  onClick(event) {
    this.title = event;
  }
}
