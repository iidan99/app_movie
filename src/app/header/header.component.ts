import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild("name") name;
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  onSelect(element: string){
    this.movieService.movieSort(element);

  }
}
