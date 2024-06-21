import { NgFor, NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription, debounceTime, fromEvent, throttleTime } from 'rxjs';
import { NgImageSliderModule } from 'ng-image-slider';
@Component({
  selector: 'app-home-small-slider',
  standalone: true,
  imports: [NgFor,NgStyle,RouterLink,NgImageSliderModule],
  templateUrl: './home-small-slider.component.html',
  styleUrl: './home-small-slider.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeSmallSliderComponent{
@ViewChild('scrl') scrl:ElementRef | undefined;

scrollX = 0;
scrollEnd = false;

slide(shift:number){
  if(this.scrl){
    this.scrl.nativeElement.scrollBy({
      left: shift,
      behavior: 'smooth',                                
    });
    this.scrl.nativeElement.scrollLeft += shift;
    this.scrollX += shift;
    this.scrollCheck()
  }
}
scrollCheck(){
  if(this.scrl){
    this.scrollX = this.scrl.nativeElement.scrollLeft;
    this.scrollEnd = Math.floor(this.scrl.nativeElement.scrollWidth 
      - this.scrl.nativeElement.scrollLeft) <= 
      this.scrl.nativeElement.offsetWidth;
  }
}


 images:string[]=["assets/images/small-slider/bike1.png","assets/images/small-slider/bike2.png","assets/images/small-slider/bike3.png"
  ,"assets/images/small-slider/bike4.png"
 ]
 
}
