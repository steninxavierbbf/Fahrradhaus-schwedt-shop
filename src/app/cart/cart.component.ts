import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartServices } from '../shared/services/cart.service';
import { LocalstorageUserDataService } from '../shared/services/localstorage-user.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf,NgFor,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
cartArray
userId
noProducts
totalPrices
grandTotal
constructor(private router:Router, private route:ActivatedRoute, private cart:CartServices, private local:LocalstorageUserDataService){}
ngOnInit(): void {
  this.local.userIdsec$.subscribe((id)=>this.userId = id)
this.cart.getCartItems(this.userId).subscribe((item:any)=>{
  const filteredArray = item.filter((item)=>item.line_items.length === 0)
filteredArray.map((item)=>{
this.cart.deleteCartItem(item.id).subscribe()
window.location.reload()
  })
  this.cartArray= item
this.totalPrices = item.map((price)=>price.line_items[0]?.total)
this.grandTotal = this.totalPrices.reduce((acc,curr)=> acc + Number(curr),0)
console.log(this.cartArray)
})


window.scrollTo(0,0)

}

deleteItem(id:number){
this.cart.deleteCartItem(id).subscribe((data)=>
{

  this.cart.getCartItems(this.userId).subscribe((item)=>{
    this.cartArray = item;
    window.location.reload()
  })
} 
)
}

increment(orderId,id,quantity,price){
  const updatedQuantity= quantity + 1;
  const totalprice = (updatedQuantity * price).toString()
this.cart.updateOrder(orderId,updatedQuantity,id,totalprice,price).subscribe((item)=>{
  console.log(item)    
   window.location.reload()})
}
decrement(orderId,id,quantity,price){
  const updatedQuantity= quantity - 1;
  const totalprice = (updatedQuantity * price).toString()
this.cart.updateOrder(orderId,updatedQuantity,id,totalprice,price).subscribe((item)=>{
  console.log(item)    
   window.location.reload()})

}
}
