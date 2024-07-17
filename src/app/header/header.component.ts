import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { CartServices } from '../shared/services/cart.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LocalstorageUserDataService } from '../shared/services/localstorage-user.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,RouterLink,RouterLinkActive,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private login:LoginService,private cart:CartServices, private local:LocalstorageUserDataService, private router:Router){
  
  }
  countArray
  isScrolled:boolean=false;
  isLogoutActive:Boolean=false;
  isMenuOpen= false;

  toggleMenu():void{
    this.isMenuOpen= !this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen=false;
  }
userName
userId
totalPrice
  ngOnInit(){
    this.local.user$.subscribe(name=>{
      this.userName = name
    })
    this.local.userIdsec$.subscribe((id)=>
      this.cart.getCartItems(id).subscribe((item)=>{
        this.countArray = item
      })
    )
    
  }
  activeLogout(){
    this.isLogoutActive= !this.isLogoutActive
  }
  logoutAccount(){
localStorage.clear();
this.userName=""
// window.location.reload()
this.router.navigate([''])

  }
 @HostListener('document:scroll')
 scrollFunction(){
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    this.isScrolled=true
  }else{
    this.isScrolled=false
  }
 }
}
