import { Component } from '@angular/core';
import { LoginService } from '../../services/login-service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/car-model/user.model';
import { error } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  loginModel: User = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.loginService.getUserByLogin(formData).subscribe({
        next: (response) => {
          console.log(response);
          alert('Successfully logged in!')
        },
        error: (error) => {
          console.error(error);
          alert('Login or password invalid!')
        }
      });
    } else {
      alert('Please fill all the fields before logging in!')
    }
    
  }

}
