import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MobileLineDividerComponent } from "../../mobile-line-divider/mobile-line-divider.component";

@Component({
    selector: 'app-about-us',
    standalone: true,
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    imports: [NgFor, MobileLineDividerComponent,NgIf]
})
export class AboutUsComponent implements OnInit {
ngOnInit(): void {
  window.scrollTo(0,0)
}

brands=[{
  logo:"assets/images/logos/bbf.png",
  image:"assets/images/logos/bbf-image.jpg",
  description:"Anfang der 1990er Jahre in Deutschland: Ostdeutsche Unternehmen werden verkauft, übernommen und geschlossen. Wir aber entschließen uns, gemeinsam neue Wege zu gehen: </br><p>Wir lassen eine Fahrradmarke entstehen, die niemanden vergisst. Eine Marke, die allen ermöglicht, ihr Ziel zu erreichen. Wir verbinden das Beste aus Ost und West, lassen Kraft aus der Verbindung von Berliner Großstadt und Brandenburgischem Land entstehen: Wir gründen BBF und stecken unser gesamtes Wissen und all unsere Liebe in dieses Neue. Vor den Toren Berlins designen wir seither Fahrräder und E-Bikes für ganz Deutschland.</p><br/><p>BBF - Dein Rad. Dein Zuhause.</p>",
  website:"bbf.bike"
},{
  logo:"assets/images/logos/checker-pig-logo.png",
  image:"assets/images/logos/checkerpig-image.jpg",
  description:"Shit! 29 neue Emails. Dabei hast du deinen Account erst vor zwei Stunden gecheckt. Deine Hand greift automatisch nach der Kaffeetasse. Leer. Wenn du jetzt wenigstens eine rauchen könntest. Oder scheiß laute Musik hören. Aber Großraumbüro, Nachbarn – und überhaupt, alles voll mit Menschen, die stöhnen, sobald du nicht still auf deinem Platz sitzt und auf den Bildschirm starrst.Du ruckelst mit deinem super bequemen, ergonomischen Stuhl ein Stück nach hinten und schließt die Augen. War das w irklich dein Plan? Wolltest du das hier leben? <br/> <p> Dein Herz bumpert träge vor sich hin, deiner Lunge reicht ein flaches, saftloses Atmen. Du erinnerst dich, wie du mit vier einen ICE steuern wolltest, mit fünf Verbrecher jagen, und mit sechs Menschen aus höchster Not vor Bränden retten. Deine Finger klappern auf der Tischplatte. Hey, es brennt – nicht hier im Büro, sondern unter deinen Nägeln, in deinem Herzen. Du musst raus hier!</p><br/><p>„Es sind noch nicht alle Anwendungen geschlossen“ sagt dein Computer, „wollen sie den Vorgang trotzdem fortführen?“ Du stehst auf und gehst. Dein Bike wartet auf dich. Jetzt. Raus.</p><br/><p>Wild & free – Checker Pig.</p>",
  website:"checker-pig.com"
},
{
  logo:"assets/images/logos/dahon-logo.png",
  image:"assets/images/logos/dahon-image.jpg",
  description:"Wer auf der Suche nach einem neuen Faltrad für den Weg zur Arbeit oder für den Urlaub ist, der kommt an einem Dahonbike nicht vorbei. Zahlreiche Produkt- und Design-Preise können nicht lügen, die Räder des Ersten und <br/> <p>weltgrößten Faltrad-Herstellers stehen für Innovation und Nachhaltigkeit. Seit 40 Jahren baut Dahon innovative Falträder für jeden Einsatzzweck. Von schlicht bis auffallend schön, von komfortabel bis sportlich, von pur bis komplett ausgestattet</p><br/><p>Seit 2011 vertreibt die BBF Bike GmbH DAHON in Deutschland.</p>",
  website:"dahon.bike"
}
]
}
