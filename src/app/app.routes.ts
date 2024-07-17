import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FahrradverleihComponent } from './pages/fahrradverleih/fahrradverleih.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouPageComponent } from './pages/thank-you-page/thank-you-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path:"",component:HomePageComponent},
    {path:"fahrradverleih",component:FahrradverleihComponent},
    {path:"service-leistungen",component:ServiceComponent},
    {path:"uber-uns",component:AboutUsComponent},
    {path:"shop",component:ShopComponent},
    {path:"single-product",component:SingleProductComponent},
    {path:"checkout",component:CheckoutComponent},
    {path:"success",component:ThankYouPageComponent},
    {path:"login",component:LoginComponent},
    {path:"login/registration",component:RegistrationComponent},
    {path:"login/reset-password",component:ForgotPasswordComponent},
    {path:"cart",component:CartComponent}
];
