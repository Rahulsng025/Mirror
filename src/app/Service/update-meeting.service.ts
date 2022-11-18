import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateMeetingService {

  constructor(private http:HttpClient) { }
 updateMeeting(data,id){
    const auth_token=localStorage.getItem('token');
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${auth_token}`);
    return this.http.post("http://mirror.shreddersbay.com/mirror/public/api/auth/updatemeeting"+"/"+id,data,{headers:{'Authorization': `Bearer ${auth_token}`}})
  }
}
