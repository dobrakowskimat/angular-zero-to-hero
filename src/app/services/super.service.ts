import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor() { }

  myCounter: number = 0;
  subject = new BehaviorSubject<number>(this.myCounter);

  countMe() {
    this.myCounter++;
    this.subject.next(this.myCounter);
  }
}
