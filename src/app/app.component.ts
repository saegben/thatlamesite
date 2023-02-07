import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  visible: boolean = false;
  toggleMenu() {
    this.visible = this.visible? false : true;
  }
}