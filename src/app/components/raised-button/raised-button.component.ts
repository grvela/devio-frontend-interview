import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent {
  @Input({required: true}) label = '';
  @Input() isDisabled = false;
  @Output() isClicked = new EventEmitter<boolean>();

  onClick(){
    this.isClicked.emit(true);
  }
}
