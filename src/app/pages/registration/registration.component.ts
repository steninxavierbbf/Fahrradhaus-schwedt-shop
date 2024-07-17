import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../shared/services/registration.service';
import { Router, RouterLink } from '@angular/router';
import { Token } from '../../shared/interfaces/registeration.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,RouterLink,NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
ngOnInit(): void {
  window.scrollTo(0,0)
}
emailCheck:boolean=true;
message:string
showPassword:boolean=false
passwordError:boolean=true
userExists:string
  constructor(private reg:RegistrationService,private router:Router){}
  registration(){
    const passwordRegex= /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/
    const checkPassword = passwordRegex.test(this.registrationFormDetails.password)
    this.passwordError=checkPassword
    if(checkPassword&&
      this.registrationFormDetails.name&&
      this.registrationFormDetails.username&& this.emailCheck){
        this.reg.registration
        (this.registrationFormDetails.email,
          this.registrationFormDetails.password,
          this.registrationFormDetails.name,
          this.registrationFormDetails.username)
          .subscribe(
data=>{
  if(data){
    this.router.navigate(['login'])
    this.message=""
  }
},
error=>this.userExists=error.error.data.message
)
    }else{
this.message="Fill the form"
    }

  }
  togglePassword(){
    this.showPassword=!this.showPassword
    }
  registrationFormDetails={
    "name":"",
    "email":"",
    "username":"",
    "password":""
  }
  valueSection(event){
    const email = event.target.value
    const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
    const validCheck= regex.test(email)
    this.emailCheck=validCheck;
  }
}
