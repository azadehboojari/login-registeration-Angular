import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private user:HttpClient) { }

  register(newUser, cb){
    this.user.post('/register', newUser)
    .subscribe(data=>cb(data))
  }

  login(user, cb){
    this.user.post("/login", user)
    .subscribe(data=>cb(data));
  }

  session( cb){
    this.user.get("/session")
    .subscribe(data=>cb(data));
  }
  
  logout(){
    this.user.get("/logout"). subscribe();
  }
}
