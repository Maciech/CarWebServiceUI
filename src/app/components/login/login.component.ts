import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/car-model/user.model';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user?: User;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private appComponent: AppComponent
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }



  login(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      const user: User = {
        email: formData.email,
        password: formData.password
      };
      this.loginService.getUserByModel(user).subscribe({
        next: (response) => {
          console.log(response);
          alert('Successfully logged in!');
          this.appComponent.isLogged = true;
          if (response.isAdmin === 1) {
            this.router.navigate(['/admin-dashboard'])
          } else {
            this.router.navigate([''])
          }
          
        },
        error: (error) => {
          console.error(error);
          alert('Login or password invalid!');
        }
      });
    } else {
      alert('Please fill all the fields correctly before logging in!');
    }
  }
}