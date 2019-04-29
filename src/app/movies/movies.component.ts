import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from './movies.service';
import { PopupService } from '../sheard/popup.service';

import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieLists = [];
  movieId: number;
  subscription: Subscription;
  @Output() popupActive = new EventEmitter<boolean>();
  constructor(private movieService: MoviesService, private popupService: PopupService) { }

  ngOnInit() {
    this.movieService.getMovies();
    this.subscription = this.movieService.updateMovie.subscribe((data) => {
      this.movieLists = data;
      this.popupService.active = false;
    });
  }
  onDelete(movie) {
    this.popupService.active = true;
    this.movieService.movie = movie;
    this.popupService.edit = false;
  }
  
  onEdit(movie){
    this.popupService.active = true;
    this.popupService.edit = true;
    this.movieService.movie = movie;
    this.popupService.movie = movie;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
