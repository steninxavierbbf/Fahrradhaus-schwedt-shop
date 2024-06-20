import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaymentOptionsComponent } from "../../payment-options/payment-options.component";
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
    selector: 'app-checkout',
    standalone: true,
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss',
    imports: [NgFor,NgIf, PaymentOptionsComponent,FormsModule]
})
export class CheckoutComponent implements OnInit{
  emailCheck:boolean=true;
  fillForm:boolean=false
  orderedItems=[{
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
  paymentSection={
    "email":"",
    "phone":"",
    "name":"",
    "address":"",
    "pin":"",
    "place":""
  }
  constructor(private location:Location){}
ngOnInit(): void {
  window.scrollTo(0,0);
}
openPaymentOption:boolean=false;
paymentDetails(){
  const email = this.paymentSection.email
  const phone = this.paymentSection.phone
  const name = this.paymentSection.name
  const address = this.paymentSection.address
  const pin = this.paymentSection.pin
  const place =this.paymentSection.place
     if(email && phone && name && 
      address && pin && place && this.emailCheck){
       this.openPaymentOption = true;
     }
     else{
      this.fillForm= true;
     }

}
goBackToLastPage(){
this.location.back()
}
valueSection(event){
  const email = event.target.value
  const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
  const validCheck= regex.test(email)
  this.emailCheck=validCheck;
}
}
