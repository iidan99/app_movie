import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/sheard/popup.service';
import { MovieModel } from '../movies.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.css']
})
export class MoviePopupComponent implements OnInit {
  @Output() delete = new EventEmitter<boolean>();
  movie: MovieModel;
  // edit:boolean;
  check = [];
  movieGenre = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
   "Family", "Fantasy", "Horror", "Mystery",
    "Romance", "Sci-Fi", "Superhero", "War"];

    @ViewChild('form') movieForm: NgForm;

  constructor(private popupservice: PopupService) { }

  ngOnInit() {
    // this.edit = this.popupservice.edit;
    this.movie = this.popupservice.movie;
   console.log(this.movieGenre);
    if(this.popupservice.edit){
    this.check.push(...this.movie.genre.split(","));
    }
  }

  onSubmit(){
    // console.log(this.movieForm.);
  }

  onClose() {
    this.popupservice.active = false;
  }
}