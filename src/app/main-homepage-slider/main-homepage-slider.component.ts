import { NgIf, NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-homepage-slider',
  standalone: true,
  imports: [NgIf,NgStyle,RouterLink],
  templateUrl: './main-homepage-slider.component.html',
  styleUrl: './main-homepage-slider.component.scss'
})
export class MainHomepageSliderComponent implements OnInit , OnDestroy {
  currentIndex:number=0
  timer:any
  images:string[]=["assets/images/main_slider/bike_slider2.jpg","assets/images/main_slider/bike_slider1.png"]
    prevImage(){
  const isLastSlide= this.currentIndex === this.images.length - 1;
  const newIndex= isLastSlide ? 0 : this.currentIndex + 1;
  this.currentIndex = newIndex
 this.resetTimer()
 this.startTimer()
    }
    nextImage(){
  const isFirstSlide =  this.currentIndex === 0;
  const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
  this.currentIndex = newIndex;
 this.resetTimer()
 this.startTimer()
    }
    getCurrentSliderUrl():string{
      return this.images[this.currentIndex]
    }
    ngOnInit(): void {
 this.timer=setInterval(()=>{
 const nextIndex= (this.currentIndex+1) % this.images.length
 this.currentIndex=nextIndex
 },6000)
    }
    ngOnDestroy():void {
    if(this.timer){
  clearInterval(this.timer)
    }
    }
    resetTimer(){
      if(this.timer){
        clearInterval(this.timer)
          }
    }
    startTimer() {
      this.timer=setInterval(()=>{
        const nextIndex= (this.currentIndex+1) % this.images.length
        this.currentIndex=nextIndex
        },6000)
    }
}
