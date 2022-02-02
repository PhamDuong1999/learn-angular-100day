import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  user = {
    name: 'Duong',
    age: 17,
  };
  changeUserName(e: any) {
    this.user.name = e.value;
  }
}
