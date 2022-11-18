import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddMeetingService {

  constructor(private http:HttpClient) { }

  addMeeting(data){
    const auth_token=localStorage.getItem('token');
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${auth_token}`);
    return this.http.post("http://mirror.shreddersbay.com/mirror/public/api/auth/addmeetinglink",data,{headers:{'Authorization': `Bearer ${auth_token}`}})
  }
}
