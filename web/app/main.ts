import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component'
import {enableProdMode} from '@angular/core';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
import { appRouterProviders } from './app.routes';

enableProdMode();
bootstrap(AppComponent, [appRouterProviders, disableDeprecatedForms(), provideForms()]);