import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient) { }

  apiUrl = environment.apiUrl;

  getMovies(): Observable<Movie[]> {​

    return this.httpClient.get<Movie[]>(​
      `${this.apiUrl}/ParamountPictures`​
    );​
  }

}
