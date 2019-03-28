import { Component, OnInit, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/sheard/popup.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieModel } from '../movies.model';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movieGenre = ["Action", "Adventure", "Animation", "Comedy", "Crime", "Drama",
    "Family", "Fantasy", "Horror", "Mystery",
    "Romance", "Sci-Fi", "Superhero", "War"];

    check;
    movie: MovieModel;
    movieForm: FormGroup;
    constructor(private popupservice: PopupService) {
    }
    
    ngOnInit() {
      this.movie = this.popupservice.movie;
      
      this.movieForm = new FormGroup({
        title: new FormControl(this.movie.title, Validators.required),
        time: new FormControl(this.movie.runtime, Validators.required),
        year: new FormControl(this.movie.year, Validators.required)
      });
  }

  onClose() {
    this.popupservice.active = false;
  }

  onSubmit() {
    console.log(this.movieForm);
    this.popupservice.onSave(this.movieForm.value);
    this.popupservice.active = false;
  }
}