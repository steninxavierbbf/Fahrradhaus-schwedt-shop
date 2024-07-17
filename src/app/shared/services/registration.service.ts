import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Token } from "../interfaces/registeration.interface";
import { catchError, throwError } from "rxjs";

@Injectable({providedIn:'root'})

export class RegistrationService{
    jwtToken=signal<any>('')
    constructor(private http:HttpClient){}

    registration(email:string,password:string,name:string,username:string){
      
        return this.http.post
        (`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/users&email=${email}&password=${password}&user_nicename=${username}&first_name=${name}&Auth_Code=THISISMySpeCiaLAUthCode`,{})
    }
    getJwtToken(email:string,password:string){
        const headers= new HttpHeaders({
            "alg" : "HS256",
            "typ" : "JWT"
           })
        return this.http.post<any>
        (`https://staging.fahrradhaus-schwedt.de/?rest_route=/simple-jwt-login/v1/auth&email=${email}&password=${password}`,{headers})

    }
}
