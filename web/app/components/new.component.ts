import {Component, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';
import {CORE_DIRECTIVES} from '@angular/common';
import {FORM_DIRECTIVES} from '@angular/forms';
import {BUTTON_DIRECTIVES, AlertComponent, DATEPICKER_DIRECTIVES, DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {Modal} from './common/modal';


@Component({
  selector: 'new-hedge',
  directives: [AlertComponent, BUTTON_DIRECTIVES, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES, FORM_DIRECTIVES, DATEPICKER_DIRECTIVES, NgModel, Modal],
  templateUrl: './app/views/new.component.html',
})
export class NewComponent {
  public options = {};
  public type: string = 'Currency';
  public action: string = 'Buy';
  public target: string = '';
  public risk: string = '';
  public quantity: string = '';

  public dt: Date = new Date();
  private minDate: Date = null;
  private events: Array<any>;
  private tomorrow: Date;
  private afterTomorrow: Date;
  private formats: Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];

  private deals: Array<any> = []

  private cancelConfirmationModal: Modal;

  private dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;

  public getDate(): number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  constructor() {

  };

  whatClicked(choice): boolean {
    this.target = choice;
    return false;
  }

  items(): Array<string> {
    if (this.type == "Currency") {
      return ['USD', 'EUR', 'NIS'];
    }
    else {
      return ['COP', 'IRN', 'GLD', 'OIL'];
    }
  }

  typeClicked() {
    this.target = '';
  }

  // inside your component:
  modalLoaded(modal: Modal) {
    this.cancelConfirmationModal = modal; // Here you get a reference to the modal so you can control it programmatically
    console.log(modal);
  }

  modalClosed(modal: Modal) {
    console.log(modal);
  }

  addDeal() {
    this.deals.push({
      'type': this.type,
      'action': this.action,
      'target': this.target,
      'risk': this.risk,
      'quantity': this.quantity,
      'date': this.dt
    });
  }

  deleteDeal(index: number){
    this.deals.splice(index, 1);
    return false;
  }

  canProceed(){
    return this.type
      && this.action
      && this.target
      && this.risk
      && this.quantity
  }
}