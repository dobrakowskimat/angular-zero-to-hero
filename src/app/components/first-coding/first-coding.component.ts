import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-first-coding',
  templateUrl: './first-coding.component.html',
  styleUrls: ['./first-coding.component.scss']
})
export class FirstCodingComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  inputValue: string = 'initial string';
  today: Date = new Date();
  showWarning: boolean = false;

  deci1: number = 123.234234
  deci2: number = 0.1;
  movies$: Observable<Movie[]>
  ngOnInit(): void {
    this.movies$ = this.moviesService.getMovies();
  }

  warnUser(): void {
    this.showWarning = !this.showWarning;
  }

}
