import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Optional } from '@interfaces/optional/optional';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent {
  @Input({required: true}) option: Optional = {} as Optional;
  @Output() optionRequest = new EventEmitter<{
    optional: Optional,
    isChecked: boolean
  }>()

  onToggleChange(isTrue: boolean){
    this.optionRequest.emit({ optional: this.option, isChecked: isTrue })
  }
}
