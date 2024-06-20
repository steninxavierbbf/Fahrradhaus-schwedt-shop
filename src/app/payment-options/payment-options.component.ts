import { NgIf } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CreditCardDirectivesModule,CreditCardValidators} from 'angular-cc-library';
import { cvv, expirationDate } from 'card-validator';

@Component({
  selector: 'app-payment-options',
  standalone: true,
  imports: [NgIf,FormsModule,RouterLink,CreditCardDirectivesModule],
  templateUrl: './payment-options.component.html',
  styleUrl: './payment-options.component.scss'
})
export class PaymentOptionsComponent implements OnInit{
  @Input()
  option!: boolean;
  cardSelected:boolean | undefined
  paypal:boolean | undefined
  cardCheck:boolean=true
  expiryDate:boolean=true
  cvvchecked:boolean=true
  buttonActive !:boolean
   cardDetails={
    cardnumber:"",
    expiry:"",
    cvv:""
   }
  constructor(private _fb:FormBuilder,private router:Router){}
  ngOnInit(): void {

   }
  creditCardSelected(){
    this.paypal = false;
this.cardSelected=true;
  }
  paypalSelected(){
   this.paypal = true;
   this.cardSelected=false;
  }
  cardNumberCheck(e){
    
    const cardNumber= e.target.value;
      const regexPattern=/(?:\d[ -]*?){13,16}/
      const validCheck= regexPattern.test(cardNumber)
     this.cardCheck=validCheck
    


  }
  expiryDateCheck(e){
    const expiry=e.target.value;

      const string= expiry.replace(/\s/g, '')
      const inputYear= string.split('/')[1]
      const currentYear=new Date().getFullYear()
       if(inputYear >= currentYear){
         const regexPattern= /^(0[1-9]|1[0-2])\/20(?:2[4-9]|[2-9][0-9])/;
         const validCheck=regexPattern.test(string)
         this.expiryDate=validCheck;
       }
    

  }
  cvvCheck(e){
    const cvvnumber=e.target.value;
      const regexPattern=/^[0-9]{3,4}$/
      const validcheck= regexPattern.test(cvvnumber)
  this.cvvchecked=validcheck

  }
  submitPayment(){
 const cardNumberValue=this.cardDetails.cardnumber;
 const cardExpiry=this.cardDetails.expiry;
 const cardCvv=this.cardDetails.cvv;
    if(this.cvvchecked && this.cardCheck && this.expiryDate && cardNumberValue && cardExpiry && cardCvv){
      this.router.navigate(['/success'])
    }
  }
}
