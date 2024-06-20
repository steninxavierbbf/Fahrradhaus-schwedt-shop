import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgFor],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0,0)
  }
  points=["Wir berechnen vor Ort Ihren persönlichen Wunschkredit.",
    "Legen Sie uns einfach Ihre EC Karte und Ihren Personalausweis vor.<br/>Wir erledigen Ihren Krediteintrag bei einer unserer Partnerbanken.",
    "Nach wenigen Sekunden erhalten Sie eine Bestätigung,<br/> ob Ihr Kreditwunsch genehmigt wird.",
    "Nach erfolgreicher Genehmigung, benötigen wir nur noch Ihre Unterschrift und erledigen den Rest für Sie"
  ]
  services=[{
    title:"Fachverkauf",
    description:"Unsere Verkäufer überzeugen durch fundiertes Fachwissen und Kompetenz – außerdem sind sie selbst leidenschaftliche Radler und wissen worauf es ankommt! Gerne nehmen wir uns auch mal etwas mehr Zeit für Sie!"
  },
  {
    title:"Einspeichen und Zentrieren von Laufrädern aller Art",
    description:"Durch unser geschultes Werkstattteam haben Sie die Gewissheit, dass Ihre Laufräder bei uns in guten Händen sind. Gut zentrierte Räder halten länger."
  },
  {
    title:"Probefahrt",
    description:"Testen Sie Ihr neues Fahrrad und Sie gehen beim Kauf kein Risiko ein. Bei uns können Sie gleich mal aufsteigen und ‘erfahren’, ob Sie sich auf dem Rad wohlfühlen. Denn vor allem darauf kommt es an!"
  },
  {
    title:"Montage und Wartung von Scheibenbremsen",
    description:"Wir bereiten Ihr Rad so vor, dass Scheibenbremsen auch einwandfrei funktionieren und arbeiten können. Schleifen war gestern."
  },
  {
    title:"Fahrradfachwerkstatt",
    description:"‚Morgens gebracht – abends geholt‘ – Während Sie arbeiten, reparieren wir Ihr Rad! In unserer Fachwerkstatt steht Ihnen ein ausgebildeter Zweiradmechaniker mit Rat und Tat fachmännisch und immer schnell und unkompliziert zur Seite. Ein Kostenvoranschlag ist für uns selbstverständlich."
  },
  {
    title:"Abstimmung von Federgabeln und Dämpfern",
    description:"Wir helfen Ihnen dabei, die richtige Anpassung für Ihre Federgabel und Dämpfer für Ihre individuellen Bedürfnisse zu finden. Federn sollen auch wirklich federn."
  },
  {
    title:"Sicherheitscheck",
    description:"Alle Fahrräder werden von unserem Fahrradmechanikern fachmännisch montiert und geprüft. Ihre Sicherheit steht bei uns an erster Stelle."
  },
]

}
