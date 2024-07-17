import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class LocalstorageUserDataService{
    private userName = new BehaviorSubject<string>(localStorage.getItem('name') || '')
    user$ = this.userName.asObservable();
    private userId= new BehaviorSubject<string>(localStorage.getItem('id') || '')
    userIdsec$ = this.userId.asObservable();
    private userCart = new BehaviorSubject<string>(localStorage.getItem('cart') || '')
    userCartSec$= this.userCart.asObservable()

    setUserName(name:string){
        localStorage.setItem('name',name);
        this.userName.next(name);
    }
    getUserName(){
        return localStorage.getItem('name')
    }


    
    setUserId(id:string){
        localStorage.setItem('id',id);
        this.userId.next(id)
    }
    getUserId(){
        return localStorage.getItem('id');
    }
    
    
    setCart(items:any){
        localStorage.setItem('cart',JSON.stringify(items))
        this.userCart.next(items)
    }
    getCart(){
        return JSON.parse(localStorage.getItem('cart'));
    }
}