import { Injectable } from '@angular/core';
import { MovieModel } from './movies.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: MovieModel[] = [
    new MovieModel("Spider-Man: Into the Spider-Verse",
      "2018",
      "117 min",
      "Animation, Action, Adventure, Comedy, Family, Sci-Fi",
      "English, Spanish",
      "1",
      "https://images-na.ssl-images-amazon.com/images/I/91Tr%2BbhnMUL._SY679_.jpg"
    ),
    new MovieModel("Black Panther",
      "2018",
      "134 min",
      "Action, Adventure, Sci-Fi",
      "Swahili, Nama, English, Xhosa, Korean",
      "tt1825683",
      "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"
    )
  ];

  movie: MovieModel;
  updateMovie: BehaviorSubject<MovieModel[]> = new BehaviorSubject<MovieModel[]>(this.movies);

  constructor() { }

  onGetMovies() {
    return this.movies.slice();
  }

  onRemove() {
    const movId = this.movie.id;
    this.movies = this.movies.filter(movie => movie.id !== movId);
    this.updateMovie.next(this.movies);
  }
  onAdd(){
    this.movies.push(this.movie);
    this.updateMovie.next(this.movies);
  }
  onSave(newValues){
    // select the correct movie index in the array by the id
    const corrcetMovie = this.movies.findIndex(movie => movie.id === this.movie.id);
    
    this.movies[corrcetMovie].title = newValues.title;
    this.movies[corrcetMovie].runtime = newValues.time;
    this.movies[corrcetMovie].year = newValues.year;

    this.updateMovie.next(this.movies);
  }
}
