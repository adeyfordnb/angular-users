import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsersListService {

  constructor(
    public http: HttpClient
  ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  addUser(user){
    return this.http.post('https://jsonplaceholder.typicode.com/users', user)
  }


}
