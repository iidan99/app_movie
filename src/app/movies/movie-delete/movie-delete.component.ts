import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/sheard/popup.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  constructor(private popupservice: PopupService) { }

  ngOnInit() {
  }
  onDelete() {
    console.log('delete');
    this.popupservice.onDelete();
  }
  onClose() {
    this.popupservice.active = false;
  }
}
