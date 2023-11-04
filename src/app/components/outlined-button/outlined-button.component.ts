import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outlined-button',
  templateUrl: './outlined-button.component.html',
  styleUrls: ['./outlined-button.component.scss']
})
export class OutlinedButtonComponent {
  @Input({required: true}) label = '';
  @Input() isDisabled = false;
  @Output() isClicked = new EventEmitter<boolean>();

  onClick(){
    this.isClicked.emit(true);
  }
  
}
