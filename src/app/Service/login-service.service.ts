import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  login(email,pass){
   
  
return this.http.post("http://mirror.shreddersbay.com/mirror/public/api/auth/login",{email:email,password:pass});
  }
}
