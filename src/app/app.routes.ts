import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FahrradverleihComponent } from './pages/fahrradverleih/fahrradverleih.component';

export const routes: Routes = [
    {path:"",component:HomePageComponent},
    {path:"fahrradverleih",component:FahrradverleihComponent},
    // {path:"service-leistungen"},
    // {path:"uber-uns"},
    // {path:"shop"},
    // {path:"termin-buchen"}
];
