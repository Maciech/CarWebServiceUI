import { Component } from '@angular/core';
import { LoginService } from './services/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarWebServiceUI';

  constructor() {}

  //Required visibility condition for logged user admin
  isAdmin: boolean = true;
  //This field must be changed dynamically
  loginToogle: string = 'Login';

  isLogged!: boolean;

}
