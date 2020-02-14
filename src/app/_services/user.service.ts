import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { map } from 'rxjs/internal/operators/map';

const config = {apiUrl: ''};
// config.apiUrl = 'http://localhost:12693';
config.apiUrl = 'https://freeprojectsnodejsapi.herokuapp.com';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/${id}`);
    }

    register(user: any) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: any) {
        return this.http.post<any>(`${config.apiUrl}/users/${user._id}`, user)
            .pipe(map(
              // tslint:disable-next-line:no-shadowed-variable
                user => {
                if (user && user.token) {
                }
                return user;
            })
        );
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
