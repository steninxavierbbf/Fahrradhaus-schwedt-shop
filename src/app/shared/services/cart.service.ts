import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, signal, WritableSignal } from "@angular/core";
import { LocalstorageUserDataService } from "./localstorage-user.service";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn:"root"
})

export class CartServices{
    cartItemsCount:WritableSignal<any>=signal(false)
    cusId= localStorage.getItem('id')
    apiUrl="https://staging.fahrradhaus-schwedt.de/wp-json/wc/v3/orders"
    consumerKey= environment.consumerKey
    secretKey= environment.secretKey
    constructor(private http:HttpClient,private local:LocalstorageUserDataService){}
    addToCart(productId:number,customerId:string, quantity:number){
        const headers = new HttpHeaders({
            'content-Type' : 'application/json',
            'Authorization':  'Basic ' + btoa(this.consumerKey +':'+ this.secretKey)
        })
        return this.http.post(this.apiUrl,{
                "status":"pending",
                 "customer_id":customerId,
                 "line_items":[{
                    "product_id":productId,
                    "quantity":quantity
                 }]            
        },{headers})
    }
    getCartItems(id){
  
        const  url = `${this.apiUrl}?customer=${id}&status=pending` 
        const headers = new HttpHeaders({
            'content-Type' : 'application/json',
            'Authorization':  'Basic ' + btoa(this.consumerKey +':'+ this.secretKey)
        })
        return this.http.get(url,{headers})
    }

    deleteCartItem(id:number){
        const  url = `${this.apiUrl}/${id}` 
        const headers = new HttpHeaders({
            'content-Type' : 'application/json',
            'Authorization':  'Basic ' + btoa(this.consumerKey +':'+ this.secretKey)
        })
        return this.http.delete(url,{headers})
    }
    updateOrder(id:number,totalQuantity:number,product_id:number,total_price:string,price:number){
            const url = `${this.apiUrl}/${id}` 
            const headers = new HttpHeaders({
                'content-Type' : 'application/json',
                'Authorization':  'Basic ' + btoa(this.consumerKey +':'+ this.secretKey)
            })
            return this.http.put(url,{
                "customer_id":this.cusId,
                "line_items":[{
                    "id":product_id,
                    "quantity": totalQuantity,
                    "price":price,
                    "subtotal":total_price,
                    "subtotal_tax":"",
                    "total":  total_price,
                    "total_tax" : "0.00"
                 }]            
            },{headers})
    }

}