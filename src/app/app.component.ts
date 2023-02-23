import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }

  forwardClicked() {
    this._location.forward();
  }

 

}
