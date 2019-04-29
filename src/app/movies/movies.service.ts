import { Injectable } from '@angular/core';
import { MovieModel } from './movies.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: MovieModel[] = [];
  movieIndex = ['tt7634968',
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
  sortVal = 1;
  sortVal2 = -1;
  sortBy: string;
  index = 0;
  movie: MovieModel;
  updateMovie: BehaviorSubject<MovieModel[]> = new BehaviorSubject<MovieModel[]>(this.movies);

  constructor(private http: HttpClient) { }

  onGetMovies() {
    return this.movies.slice();
  }

  getMovies() {
    return this.http.get(`https://www.omdbapi.com/?i=${this.movieIndex[this.index]}&apikey=1f6ad072&`).subscribe(
      (response: MovieModel) => {
        if (response.Title !== undefined) {
          this.movies.push(response),
            this.movies.sort((a, b) => a.Title < b.Title ? -1 : 1),
            this.changeIndex()
        }
      },
      (error) => console.log(error)
    );
  }

  changeIndex() {
    this.index++;
    if (this.index !== this.movieIndex.length) {
      this.getMovies();
    }
  }

  onAdd() {
    this.movies.push(this.movie);
    this.updateMovie.next(this.movies);
  }

  onSave(newValues) {
    const correctMovie = this.movies.findIndex(movie => movie.imdbID === this.movie.imdbID);
    let data = this.movies.find(element => element.Title === newValues.title);
    if (data === undefined) {
      this.movies[correctMovie].Title = newValues.title;
    } else {
      console.log("error");
    }
    this.movies[correctMovie].Runtime = newValues.time;
    this.movies[correctMovie].Year = newValues.year;
  }

  onRemove() {
    const movId = this.movie.imdbID;
    this.movies = this.movies.filter(movie => movie.imdbID !== movId);
    this.updateMovie.next(this.movies);
  }

  movieSort(value: string) {
    console.log(value);

    if (this.sortBy === value && this.sortVal !== -1) {
      this.sortVal = -1;
      this.sortVal2 = 1;
    } else {
      this.sortVal = 1;
      this.sortVal2 = -1;
    }

    this.movies.sort((a, b) => {
      if (a[value] < b[value]) {
        this.sortBy = value;
        return this.sortVal;
      }
      if (a[value] > b[value]) {
        this.sortBy = value;
        return this.sortVal2;
      }
      return 0;
    });
  }
}
