import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../Service/authenticate.service';
import {LoginServiceService} from '../../../Service/login-service.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent implements OnInit {

  constructor(public authService: AuthenticateService,
    private router: Router,
    private loginserv:LoginServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  login(email,pass){

    this.loginserv.login(email,pass).subscribe((data:any)=>{
      
      const token=data.success.token;
       localStorage.setItem('token',token);
      this.router.navigate(['dashboard'])
    })
  }

}
