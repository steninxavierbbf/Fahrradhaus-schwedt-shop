import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { MainHomepageSliderComponent } from "../../main-homepage-slider/main-homepage-slider.component";
import { HomeGalleryComponent } from "../../home-gallery/home-gallery.component";
import { FooterComponent } from "../../footer/footer.component";
import { DiscountSectionComponent } from "../../discount-section/discount-section.component";
import { HomeSmallSliderComponent } from "../../home-small-slider/home-small-slider.component";
import { HomepageAboutComponent } from "../../homepage-about/homepage-about.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [HeaderComponent, MainHomepageSliderComponent, HomeGalleryComponent, FooterComponent, DiscountSectionComponent, HomeSmallSliderComponent, HomepageAboutComponent]
})
export class HomePageComponent {

}
