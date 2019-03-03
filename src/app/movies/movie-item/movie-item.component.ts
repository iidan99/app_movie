import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { MovieModel } from '../movies.model';
import { PopupService } from 'src/app/sheard/popup.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MovieModel;
  @Output() selectedMovie = new EventEmitter<MovieModel>();
  @Output() deletedMovie = new EventEmitter<MovieModel>();
  constructor(private popupService: PopupService) { }

  ngOnInit(){
  }

  onDelete(){
    this.deletedMovie.emit(this.movie);
  }

  onEdit(){
    this.selectedMovie.emit(this.movie);
  }
}
