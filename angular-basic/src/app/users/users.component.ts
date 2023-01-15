import { Component } from '@angular/core';

@Component({
  selector: 'app-users', // [] -> attribute, .app-user -> as a class,  as element -> <app-user>, #app-user as id selector
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  name = 'abhijeet';
  private age = 34;
  allowNewUser: boolean = true;
  constructor() {
    setTimeout(() => {
      this.allowNewUser = false;
    }, 3000);
  }
  getage() {
    return this.age;
  }

  eventBinded_string: string = 'this is a default string';
  changeStringUsingEvent() {
    setTimeout(() => {
      this.eventBinded_string = 'string  has been changed';
    }, 1000);
  }
}
