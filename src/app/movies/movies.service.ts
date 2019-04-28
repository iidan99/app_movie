import { Injectable } from '@angular/core';
import { MovieModel } from './movies.model';
import { BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: MovieModel[] = [];
  apiIndex = ['tt7634968',
    'tt3896198',
    'tt6823368',
    'tt0379786',
    'tt1477834',
    'tt0955308',
    'tt4701182',
    'tt4633694',
    'tt4154916',
    'tt1987680',
    'tt3513498',
    'tt0437086',
    'tt8155288',
    'tt4154756',
    'tt1270797',
    'tt1825683'];
  index = 0;
  movie: MovieModel;
  updateMovie: BehaviorSubject<MovieModel[]> = new BehaviorSubject<MovieModel[]>(this.movies);

  constructor(private http: HttpClient) { }

  onGetMovies() {
    return this.movies.slice();
  }

  getServers() {
      return this.http.get(`https://www.omdbapi.com/?i=${this.apiIndex[this.index]}&apikey=1f6ad072&`).subscribe(
        (response: MovieModel) => {this.movies.push(response),
        this.getMovies()
        },
        (error) => console.log(error)
        );
    }

  getMovies(){
    this.index++;
    console.log(this.index)
    if(this.index !== this.apiIndex.length)
    {
      this.getServers();
    }
  }
  onRemove() {
    const movId = this.movie.imdbID;
    this.movies = this.movies.filter(movie => movie.imdbID !== movId);
    this.updateMovie.next(this.movies);
  }
  onAdd() {
    this.movies.push(this.movie);
    this.updateMovie.next(this.movies);
  }
  onSave(newValues) {
    const corrcetMovie = this.movies.findIndex(movie => movie.imdbID === this.movie.imdbID);
    this.movies[corrcetMovie].Title = newValues.title;
    this.movies[corrcetMovie].Runtime = newValues.time;
    this.movies[corrcetMovie].Year = newValues.year;
  }

  movieSort(value: string) {

    this.movies.sort((a, b) => {
      if (a[value] < b[value]) {
        return 0;
      }
      if (a[value] > b[value]) {
        return -1;
      }
      return 0;
    });
  }
}
