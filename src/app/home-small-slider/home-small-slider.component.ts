import { NgFor, NgStyle } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Subscription, debounceTime, fromEvent, throttleTime } from 'rxjs';
@Component({
  selector: 'app-home-small-slider',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './home-small-slider.component.html',
  styleUrl: './home-small-slider.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeSmallSliderComponent implements OnInit{
 images:string[]=["assets/images/small-slider/bike1.png","assets/images/small-slider/bike2.png","assets/images/small-slider/bike3.png"
  ,"assets/images/small-slider/bike4.png"
 ]
 @ViewChild('horizontalScrollElem', { static: true })
 horizontalScrollElem: ElementRef | null = null
 enablePrev = false
 enableNext = false
 private scrollObserver: Subscription | null = null
  updateNavigationBtnStatus: any;
 ngOnInit() {
  if (this.horizontalScrollElem) {
    const horizontalScrollElem = this.horizontalScrollElem
    this.scrollObserver = fromEvent(
      horizontalScrollElem.nativeElement,
      'scroll',
    )
      .pipe(debounceTime(100), throttleTime(100))
      .subscribe(_ => {
        this.updateNavigationBtnStatus(horizontalScrollElem
          .nativeElement as HTMLElement)
      })
  }
}

}
