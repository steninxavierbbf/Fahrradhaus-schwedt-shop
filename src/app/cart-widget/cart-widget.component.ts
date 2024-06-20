import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './cart-widget.component.html',
  styleUrl: './cart-widget.component.scss'
})
export class CartWidgetComponent {
  cardImages=[ {"image":"assets/images/small-slider/bike1.png","smallHeading":"RETRO","mainHeading":"BRÜGGE 1.0"},
    {"image":"assets/images/small-slider/bike2.png","smallHeading":"E-TREKKING","mainHeading":"BASEL 2.0"},
    {"image":"assets/images/small-slider/bike3.png","smallHeading":"URBAN","mainHeading":"URBANRIDER 2.0"},
    {"image":"assets/images/small-slider/bike4.png","smallHeading":"E-MTB","mainHeading":"ACTIVE PIG"},
    
   ]
   cartBasketItems=[{
    image:"assets/images/small-slider/bike1.png",
    name:"Brügge 2.0",
    quantity:"1",
    price:"750 EUR"
   },
   {
    image:"assets/images/small-slider/bike2.png",
    name:"Active Pig",
    quantity:"1",
    price:"2.399 EUR"
   }
  ]

}
