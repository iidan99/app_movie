import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopupService } from './sheard/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() active = new EventEmitter<boolean>();
  title = 'app-movie';
  constructor(public popupservice: PopupService){}

  onDelete(value){
    this.active.emit(value);
  }
}

