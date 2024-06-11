import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fahrradverleih',
  standalone: true,
  imports: [NgFor],
  templateUrl: './fahrradverleih.component.html',
  styleUrl: './fahrradverleih.component.scss'
})
export class FahrradverleihComponent {
descriptions=[{
  image:"assets/images/fahrradverleih/image1.jpg",
  details:{
    title:"FAHRRADVERLEIH",
    description:["Zu Besuch in Fürstenwalde und nun möchten Sie gerne eine Fahrradtour unternehmen? In unserem Fahrradverleih bekommen Sie stabile und bequeme Räder für Ihre Tour.","Während unserer Öffnungszeiten können Sie diese bei uns ausleihen."]
  }
},
{
  image:"assets/images/fahrradverleih/image2.jpg",
  details:{
    title:"PREISE",
    description:["28 Damenrad / 7-Gang Shimano Nexus / Shimano Nabendynamo / Alu Rahmen / Rh.: 45 / 50 / 55 cm","Tag: 9 €","Woche: 40 €","Wochenende: 15 €"]

  }
},
{
  image:"assets/images/fahrradverleih/image3.jpg",
  details:{
    title:"",
    description:["Eine Kaution in Höhe von 50,- € in bar pro Rad ist zum Entleihen erforderlich und wird dann mit der fälligen Gebühr verrechnet.","Bitte halten Sie Ihren Personalausweis bereit.","Bei Gruppen bitten wir um vorherige Reservierung unter 03361 32019 oder über info@radprofis-am-bahnhof.de","Für weitere Fragen stehen wir Ihnen gerne zur Verfügung."]
  }
}

]
}
