import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { RegistrationService } from '../shared/services/registration.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartServices } from '../shared/services/cart.service';
import { LocalstorageUserDataService } from '../shared/services/localstorage-user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  
  ngOnInit(): void {
    window.scrollTo(0,0)
    this.local.userIdsec$.subscribe((id)=>{
      this.userId = id
    })
  }
  userId
  token:any
  message:string
  showPassword:boolean=false

loginDetails={
  email:"",
  password:""
}
togglePassword(){
this.showPassword=!this.showPassword
}
constructor(private login:LoginService, private reg:RegistrationService, private router:Router, private cart:CartServices, private local: LocalstorageUserDataService){}
  getUserDetailsViaJwt(){
this.reg.getJwtToken(this.loginDetails.email,this.loginDetails.password)
.subscribe(

  data=>{
    this.token=data.data.jwt
    console.log(data)
    this.login.getUser(this.token).subscribe((res:any)=>{
            if(res.success===true){
              this.login.getUserDetails(this.token).subscribe((res:any)=>{
                console.log(res.data.user)

                const userData= res.data.user
           if(userData){
                       this.local.setUserId(userData.ID)
            this.local.setUserName(userData.display_name)
            // this.cart.getCartItems(userData.ID).subscribe((data:any)=>{
            //  this.local.setCart(data)
            // })
            this.router.navigate([''])
           }
              })
            
        
            }
          })
  },
  error=>this.message=error.error.data.message
)
  }
  

}


