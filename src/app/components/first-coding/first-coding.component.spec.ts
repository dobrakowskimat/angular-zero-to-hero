import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCodingComponent } from './first-coding.component';

describe('FirstCodingComponent', () => {
  let component: FirstCodingComponent;
  let fixture: ComponentFixture<FirstCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
