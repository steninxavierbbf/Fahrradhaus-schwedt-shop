import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { MainHomepageSliderComponent } from "../../main-homepage-slider/main-homepage-slider.component";
import { HomeGalleryComponent } from "../../home-gallery/home-gallery.component";
import { FooterComponent } from "../../footer/footer.component";
import { DiscountSectionComponent } from "../../discount-section/discount-section.component";
import { HomeSmallSliderComponent } from "../../home-small-slider/home-small-slider.component";
import { HomepageAboutComponent } from "../../homepage-about/homepage-about.component";
import { ScrollToTopComponent } from "../../scroll-to-top/scroll-to-top.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [HeaderComponent, MainHomepageSliderComponent, HomeGalleryComponent, FooterComponent, DiscountSectionComponent, HomeSmallSliderComponent, HomepageAboutComponent, ScrollToTopComponent]
})
export class HomePageComponent implements OnInit {

    ngOnInit(): void {
        window.scrollTo(0,0)
    }

}
