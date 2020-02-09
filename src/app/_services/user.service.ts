import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
    
}
