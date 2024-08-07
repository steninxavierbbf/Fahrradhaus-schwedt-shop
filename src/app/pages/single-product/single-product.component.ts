import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { CartWidgetComponent } from "../../cart-widget/cart-widget.component";
import { CartServices } from '../../shared/services/cart.service';
import { LoginService } from '../../shared/services/login.service';
import { LocalstorageUserDataService } from '../../shared/services/localstorage-user.service';

@Component({
    selector: 'app-single-product',
    standalone: true,
    templateUrl: './single-product.component.html',
    styleUrl: './single-product.component.scss',
    imports: [NgFor, CartWidgetComponent,NgIf]
})
export class SingleProductComponent implements OnInit {
constructor(private cart:CartServices,private login: LoginService,private local:LocalstorageUserDataService){}
  handleStateChange(newState:boolean) {
  this.isCLicked=!newState
}
  isCLicked:boolean=false
  isScrolled:boolean=false;
  selectedImage:string=""
  ngOnInit(): void {
    window.scrollTo(0,0);
 
  }
  
  cartSection(){
  // this.isCLicked=true
   this.cart.cartItemsCount.update((item)=>item=false)
   window.location.reload()
  }
  properties=[{
    key:"Farbe",
    value:"türkis"
  },
  {
    key:"Gabel",
    value:"Starr"
  },
  {
    key:"Ganganzahl",
    value:"7-Gang"
  },
  {
    key:"Gewicht",
    value:"18,8 kg"
  },
  {
    key:"Laufradgröße",
    value:"28 Zoll"
  },
  {
    key:"Modellname",
    value:"Brügge 1.0"
  },
  {
    key:"Rahmenform",
    value:"Wave"
  },
  {
    key:"Rahmenhöhe",
    value:"RH 45 cm, RH 50 cm"
  },
  {
    key:"Rahmenmaterial",
    value:"Aluminium"
  },
  {
    key:"Schaltart",
    value:"Nabenschaltung"
  },
  {
    key:"Schaltung",
    value:"Shimano Nexus Rücktritt"
  },
  {
    key:"Modelljahr",
    value:"2024"
  },
  {
    key:"zulässiges Gesamtgewicht",
    value:"120 kg"
  },
]
selectImageFn(selectedImagePath:string){
  this.selectedImage=selectedImagePath

}
  @HostListener('document:scroll')
  scrollFunction(){
   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
     this.isScrolled=true
   }else{
     this.isScrolled=false
   }
  }
  toDescription(el:HTMLElement){
el.scrollIntoView({behavior:'smooth'})
  }
}
