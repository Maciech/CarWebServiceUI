import { Injectable } from '@angular/core';
import { User } from '../../models/car-model/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUsersServerUrl = 'http://localhost:8080/api/users';

  constructor(
    private http: HttpClient
    ) { }

  public getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUsersServerUrl}/getUserById/${userId}`);
  }

  public getUserByModel(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUsersServerUrl}/getUserByModel`, user);
  }

}
