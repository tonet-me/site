import {Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {CardComponent} from "@pages/card/card.component";
import {cardInfoResolver} from "@shared/resolver/card-info.resolver";
import {C404Component} from "@pages/c404/c404.component";

export const routes: Routes = [
  {path: '', title: 'Tonet | Home', component: HomeComponent},
  {path: '404', title: 'Tonet | Not Found', component: C404Component},
  {path: ':name', title: 'Tonet | Card Info', component: CardComponent, resolve: {cardInfo: cardInfoResolver}},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
];
