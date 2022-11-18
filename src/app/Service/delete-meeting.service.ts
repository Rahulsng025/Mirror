import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeleteMeetingService {

  constructor(private http:HttpClient) { }

  deleteMeet(id){
    const auth_token=localStorage.getItem('token');
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${auth_token}`);
    return this.http.delete("http://mirror.shreddersbay.com/mirror/public/api/auth/deletemeeting"+'/'+id,{headers:{'Authorization': `Bearer ${auth_token}`}})

  }
}
