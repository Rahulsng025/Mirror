import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetMeetingDataService {

  constructor(private http:HttpClient) { }

  getMeetingData(){
    const auth_token=localStorage.getItem('token');
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${auth_token}`);
    return this.http.get("http://mirror.shreddersbay.com/mirror/public/api/auth/getmeetinglink",{headers:{'Authorization': `Bearer ${auth_token}`}})
  }
}
