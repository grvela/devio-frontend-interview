import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {
  @Output() valueChange = new EventEmitter<number>();
  value = 1;

  onChangeValue(type: string){
    if(type === 'increment'){
      if(this.value < 100){
        this.value++;
      }
    }

    if(type === 'decrement'){
      if(this.value > 1){
        this.value--;
      }
    }

    this.valueChange.emit(this.value);
  }
}
