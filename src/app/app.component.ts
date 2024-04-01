import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-HomeWork4';
  showRegisterForm = false;
  onRegisterClick() {
    this.showRegisterForm = true;
  }
}
