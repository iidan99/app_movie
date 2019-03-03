import { Injectable, OnChanges } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { MovieModel } from '../movies/movies.model';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  active = false;
  edit = false;
  movie:MovieModel;
  constructor(private movieService: MoviesService) { }

  onDelete() {
    this.movieService.onRemove();
  }
}