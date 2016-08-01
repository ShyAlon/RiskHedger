import { provideRouter, RouterConfig } from '@angular/router';

import {OtherComponent} from './components/other.component'
import {BaduComponent} from './components/main.component'

const routes: RouterConfig = [
  { path: '', component: BaduComponent },
  { path: 'other', component: OtherComponent },
//   { path: 'hero/:id', component: HeroDetailComponent },
//   { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];