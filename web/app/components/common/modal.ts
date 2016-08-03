import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

/**
 * Shows a bootstrap modal dialog.
 * Set the body of the dialog by adding content to the modal tag: <modal>content here</modal>.
 */
@Component({
  selector: 'modal', 
  templateUrl: './app/components/common/modal.html'
})

export class Modal implements OnInit {

  @Input('title') title: string;
  @Input('cancel-label') cancelLabel: string = 'Cancel';
  @Input('positive-label') positiveLabel: string = 'OK';

  /**
   * Fires an event when the modal is closed. The argument indicated how it was closed.
   * @type {EventEmitter<ModalResult>}
   */
  @Output('closed') closeEmitter: EventEmitter<ModalResult> = new EventEmitter<ModalResult>();
  /**
   * Fires an event when the modal is ready with a pointer to the modal.
   * @type {EventEmitter<Modal>}
   */
  @Output('loaded') loadedEmitter: EventEmitter<Modal> = new EventEmitter<Modal>();

  showModal: boolean = false;

  constructor() {
    console.log('showModal = ' + this.showModal);
  }

  ngOnInit() {
    this.loadedEmitter.next(this);
    console.log('modal inited');
  }

  /**
   * Shows the modal. There is no method for hiding. This is done using actions of the modal itself.
   */
  show() {
    this.showModal = true;
  }

  positiveAction() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.POSITIVE
    });
    return false;
  }

  cancelAction() {
    console.log('sending close event');
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.CANCEL
    });
    return false;
  }
}

/**
 * The possible reasons a modal has been closed.
 */
export enum ModalAction { POSITIVE, CANCEL }
/**
 * Models the result of closing a modal dialog.
 */
export interface ModalResult {
  action: ModalAction;
}