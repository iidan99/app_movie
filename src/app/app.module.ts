import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieItemComponent } from './movies/movie-item/movie-item.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { HeaderComponent } from './header/header.component';
import { MoviePopupComponent } from './movies/movie-popup/movie-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieItemComponent,
    MovieEditComponent,
    HeaderComponent,
    MoviePopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
