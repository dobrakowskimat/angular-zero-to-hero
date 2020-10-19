import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SuperService } from 'src/app/services/super.service';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent implements OnInit, OnDestroy {
  @Input() myTitle: string;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private superService: SuperService
  ) { }

  ngOnInit(): void {
    this.superService.subject.subscribe((counter) => {
      console.log("Counter: " + counter);
    });
  }

  ngOnDestroy(): void {
    this.superService.subject.unsubscribe();
  }

  clicked(): void {
    this.clickEvent.emit('string clicked');
    this.superService.countMe();
  }
}
