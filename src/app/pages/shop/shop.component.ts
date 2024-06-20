import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  categories=["TREKKING","CITY","MTB","SUV","URBAN","CARGO","TANDEM","KOMPAKT"]
  cardImages=[ {"image":"assets/images/small-slider/bike1.png","smallHeading":"RETRO","mainHeading":"BRÜGGE 1.0"},
    {"image":"assets/images/small-slider/bike2.png","smallHeading":"E-TREKKING","mainHeading":"BASEL 2.0"},
    {"image":"assets/images/small-slider/bike3.png","smallHeading":"URBAN","mainHeading":"URBANRIDER 2.0"},
    {"image":"assets/images/small-slider/bike4.png","smallHeading":"E-MTB","mainHeading":"ACTIVE PIG"},
    
   ]

  
}
