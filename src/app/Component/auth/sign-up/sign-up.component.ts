import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../../../Service/authenticate.service';
import {SignupService} from '../../../Service/signup.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public authService: AuthenticateService,
    private router: Router,private serv:SignupService) { }

  ngOnInit(): void {
  }
  
  // SignUp(name,email,pwd){
  //   this.serv.signup(name,email,pwd).subscribe((data)=>{
  //     console.log(data)
  //     alert("Signup Successful")
  //     this.router.navigate(['login-form'])
  //   })
  // }
}

