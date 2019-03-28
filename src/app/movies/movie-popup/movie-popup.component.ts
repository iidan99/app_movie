import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { PopupService } from 'src/app/sheard/popup.service';


@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.css']
})
export class MoviePopupComponent implements OnInit {
  @Output() delete = new EventEmitter<boolean>();
  // edit:boolean;

  constructor(private popupservice: PopupService) { }

  ngOnInit() {
    // this.edit = this.popupservice.edit;
  }
}