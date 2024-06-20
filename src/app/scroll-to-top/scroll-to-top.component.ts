import { DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [NgClass],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent implements OnInit {
  ngOnInit(): void {
    
  }
  windowScrolled!:boolean;
  constructor(@Inject(DOCUMENT) private document:Document){}
  @HostListener("window:scroll",[])
  onWindowScroll(){
    if(window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100)
      {
        this.windowScrolled = true;
      }
      else if (this.windowScrolled && window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10){
        this.windowScrolled = false
      }
  }
  scrollToTop(){
    (function smoothscroll(){
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if(currentScroll > 0){
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8))
      }
    })();
  }

}
