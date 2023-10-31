import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  @Input() value = 1;
  @Output() valueChange = new EventEmitter<number>();

  decrementValue() {
    if (this.value > 1) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  incrementValue() {
    if (this.value < 100) {
      this.value++;
      this.valueChange.emit(this.value);
    }
  }
}
