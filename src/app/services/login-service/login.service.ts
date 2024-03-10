import { Injectable } from '@angular/core';
import { User } from '../../models/car-model/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiCarsServerUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  public getUserByLogin(login: string): Observable<User> {
    return this.http.get<User>(`${this.apiCarsServerUrl}/getUser/${login}`);
  }

}
