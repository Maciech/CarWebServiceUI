import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarWebServiceUI';

  //Required visibility condition for logged user admin
  isAdmin: boolean = true;
  //This field must be changed dynamically
  loginToogle: string = 'Login';

}
