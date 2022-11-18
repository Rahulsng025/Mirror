import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  signup(name,email,pass){
  
    return this.http.post("http://mirror.shreddersbay.com/mirror/public/api/auth/login",{name:name,email:email,password:pass})
      }
}
