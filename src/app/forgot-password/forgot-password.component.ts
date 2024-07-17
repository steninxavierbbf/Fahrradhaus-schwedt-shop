import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  errorMessage:string
  invalidCode:string

  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  constructor(private login:LoginService,private router:Router){}
  message:string
  resetLinkActive:boolean
  successResetLink:string
  resetLink(){
this.login.createNewPassword(this.email).subscribe(
  data=>this.successResetLink="Reset password email has been sent.",
  error=>{
    this.resetLinkActive=false;
    this.errorMessage = error.error.data.message
  }
)
this.resetLinkActive=true
  }
  email:string;
  code:string;
  newPassword:string;
  updatePassword(){
this.login.updatePassword(this.email,this.code,this.newPassword).subscribe(
  data=>{
    this.successResetLink=""
    this.router.navigate['login']
  },
  error=>{
    this.successResetLink=""
    this.invalidCode=error.error.data.message
  }
)
  }
}
