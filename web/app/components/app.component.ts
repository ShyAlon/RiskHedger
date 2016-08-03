import {Component, ViewContainerRef} from '@angular/core';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel} from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel, ROUTER_DIRECTIVES],
  templateUrl: './app/views/app.component.html',
})

export class AppComponent {
  public constructor(private viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}