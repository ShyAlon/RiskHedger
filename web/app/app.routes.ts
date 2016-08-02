import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from './components/home.component'
import {NewComponent} from './components/new.component'


const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'profile', component: HomeComponent },
  { path: 'last', component: HomeComponent },
//   { path: 'hero/:id', component: HeroDetailComponent },
//   { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];