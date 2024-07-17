import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { MainHomepageSliderComponent } from "../../main-homepage-slider/main-homepage-slider.component";
import { HomeGalleryComponent } from "../../home-gallery/home-gallery.component";
import { FooterComponent } from "../../footer/footer.component";
import { DiscountSectionComponent } from "../../discount-section/discount-section.component";
import { HomeSmallSliderComponent } from "../../home-small-slider/home-small-slider.component";
import { HomepageAboutComponent } from "../../homepage-about/homepage-about.component";
import { ScrollToTopComponent } from "../../scroll-to-top/scroll-to-top.component";
import { MobileLineDividerComponent } from "../../mobile-line-divider/mobile-line-divider.component";
import { CartServices } from '../../shared/services/cart.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [HeaderComponent, MainHomepageSliderComponent, HomeGalleryComponent, FooterComponent, DiscountSectionComponent, HomeSmallSliderComponent, HomepageAboutComponent, ScrollToTopComponent, MobileLineDividerComponent]
})
export class HomePageComponent implements OnInit {

userId= localStorage.getItem('id')
constructor(private cart:CartServices, private login:LoginService){}

    ngOnInit(): void {
        window.scrollTo(0,0)
        // this.cart.getCartItems(this.userId).subscribe((item:any)=>{
        //     const array= JSON.stringify(item)
        //     localStorage.setItem('cart',array)
        // }
  
        //     )

    }

}
