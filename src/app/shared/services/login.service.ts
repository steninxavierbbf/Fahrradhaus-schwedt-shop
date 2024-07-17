import { HttpClient } from "@angular/common/http";
import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({providedIn:"root"})

export class LoginService{

    constructor(private http:HttpClient){}
    getUser(jwt:string){
        return this.http.get(`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/autologin&JWT=${jwt}&Auth_Code=THISISMySpeCiaLAUthCode`,{})
    }
    getUserDetails(jwt:string){
        return this.http.get(`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/auth/validate&JWT=${jwt}`)
    }

    createNewPassword(email:string){
        return this.http.post(`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/user/reset_password&email=${email}`, {
         
            responseType:'text'
          })
    }
    updatePassword(email:string,code:string,newPassword:string){
        return this.http.put(`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/user/reset_password&email=${email}&code=${code}&new_password=${newPassword}`,{})
    }

}