import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bike } from "../interfaces/bikes.interface";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn:'root'
})

export class BikeListService{
    apiUrl="https://staging.fahrradhaus-schwedt.de/wp-json/wc/v3";
    consumerKey = environment.consumerKey
    secretKey= environment.secretKey
    constructor(private http:HttpClient){}
    getBikes(){
        const url=`${this.apiUrl}/products`;
        const headers = new HttpHeaders({
            'content-Type' : 'application/json',
            'Authorization' : 'Basic ' + btoa(this.consumerKey +':'+ this.secretKey)
        })
        return this.http.get<Bike[]>(url,{headers})
    }
}