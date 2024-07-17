import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BikeListService } from '../../shared/services/bikes.list.service';
import { Bike } from '../../shared/interfaces/bikes.interface';
import { CartServices } from '../../shared/services/cart.service';
import { LoginComponent } from '../../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from '../../shared/services/login.service';
import { LocalstorageUserDataService } from '../../shared/services/localstorage-user.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor,RouterLink,HttpClientModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {

oldItems
userId
  constructor(private bikes:BikeListService,private cart:CartServices , private loginsection:LoginService, private router:Router,private local:LocalstorageUserDataService){

  }
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.bikes.getBikes().subscribe((item:Bike[])=>{
   this.cardImagesList=item

    })
  }
  addToCart(id:number){
    this.local.userIdsec$.subscribe((getId)=>this.cart.getCartItems(getId).subscribe((item:any)=>{
      const duplicateElement = item.filter((item)=>{
        return item.line_items[0].product_id === id
      })
      this.router.navigate(['/single-product'])
   if(duplicateElement.length === 0){
    this.cart.addToCart(id,getId,1).subscribe((cartsection)=>{
      console.log(cartsection)
    })
   }else{
    const orderId = duplicateElement[0].id;
    const Id = duplicateElement[0].line_items[0].id
    const quantity =duplicateElement[0].line_items[0].quantity
    const price = duplicateElement[0].line_items[0].price
    const totalQuantity = quantity + 1
    const totalprice=(totalQuantity *price).toString()
    // we can give the current quantity of the product by replacing above 2.
    this.cart.updateOrder(orderId,totalQuantity,Id,totalprice,price).subscribe((item)=>
    console.log(item))
   }
      }
        ))


  }
  categories=["TREKKING","CITY","MTB","SUV","URBAN","CARGO","TANDEM","KOMPAKT"]
  cardImages=[ {"image":"assets/images/small-slider/bike1.png","smallHeading":"RETRO","mainHeading":"BRÜGGE 1.0"},
    {"image":"assets/images/small-slider/bike2.png","smallHeading":"E-TREKKING","mainHeading":"BASEL 2.0"},
    {"image":"assets/images/small-slider/bike3.png","smallHeading":"URBAN","mainHeading":"URBANRIDER 2.0"},
    {"image":"assets/images/small-slider/bike4.png","smallHeading":"E-MTB","mainHeading":"ACTIVE PIG"},
    
   ]

  cardImagesList:Bike[]

  
}
