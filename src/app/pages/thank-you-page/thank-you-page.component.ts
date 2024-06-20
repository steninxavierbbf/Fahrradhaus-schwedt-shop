import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thank-you-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './thank-you-page.component.html',
  styleUrl: './thank-you-page.component.scss'
})
export class ThankYouPageComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0,0)
  }

}
