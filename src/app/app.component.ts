import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainHomepageSliderComponent } from './main-homepage-slider/main-homepage-slider.component';
import { FooterComponent } from "./footer/footer.component";
import { HomeGalleryComponent } from "./home-gallery/home-gallery.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SwiperModule } from 'swiper/types';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, MainHomepageSliderComponent,
        FooterComponent, HomeGalleryComponent, HomePageComponent, NgIf, ScrollToTopComponent]
})
export class AppComponent {
  title = 'radprofis';
  constructor(public router:Router){}
}
