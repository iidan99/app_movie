import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PopupService } from 'src/app/sheard/popup.service';
import { MovieModel } from '../movies.model';

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.css']
})
export class MoviePopupComponent implements OnInit {
  @Output() delete = new EventEmitter<boolean>();
  movie: MovieModel;
  edit:boolean;
  check = [];
  constructor(private popupservice: PopupService) { }
  ngOnInit() {
    this.edit = this.popupservice.edit;
    this.movie = this.popupservice.movie;
   
    if(this.popupservice.edit){
    this.check.push(...this.movie.genre.split(","));
    }
  }

  onDelete() {
    this.popupservice.onDelete();
  }

  onClose() {
    this.popupservice.active = false;
  }
}
