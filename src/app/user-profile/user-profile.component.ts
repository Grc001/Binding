import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: '25',
    quote: 'Never gonna give you up, never gonna let you down !',
    photo:
      'https://repository-images.githubusercontent.com/519348881/d411fd39-0622-443e-8082-8783ccf386c8',
    pwet: false,
  };

  hideAge() {
    if (this.user.pwet === false) {
      this.user.pwet = true;
    } else this.user.pwet = false;
  }
}
