import { RouterModule, Routes } from '@angular/router';
import {
  PortafolioComponent,
  AboutComponent,
  ItemComponent,
  SearchComponent
} from './components/index.paginas';

const APP_ROUTES: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'producto/:id', component: ItemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
