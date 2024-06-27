import { NgClass } from '@angular/common';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isScrolled:boolean=false;
  isMenuOpen= false;
  toggleMenu():void{
    this.isMenuOpen= !this.isMenuOpen;
  }
  closeMenu(){
    this.isMenuOpen=false;
  }
  ngOnInit(): void {}
 @HostListener('document:scroll')
 scrollFunction(){
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    this.isScrolled=true
  }else{
    this.isScrolled=false
  }
 }
}
