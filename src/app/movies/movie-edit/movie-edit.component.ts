import { Component, OnInit } from '@angular/core';
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
        title: new FormControl(this.movie.Title, [Validators.required]),
        time: new FormControl(this.movie.Runtime, [Validators.required ,Validators.min(80), Validators.max(350)]),
        year: new FormControl(this.movie.Year, [ Validators.required, Validators.min(1989), Validators.max(new Date().getFullYear())])
      });
  }

  onClose() {
    this.popupservice.active = false;
  }

  onSubmit() {
    if(this.movie.Title != this.movieForm.value.title || this.movie.Year != this.movieForm.value.Year 
      || this.movie.Runtime != this.movieForm.value.time){
      this.popupservice.onSave(this.movieForm.value);
      this.popupservice.active = false;
    }
    else{
    // console.log(this.movieForm);
    this.popupservice.onSave(this.movieForm.value);
    this.popupservice.active = false;
    }
  }
}
