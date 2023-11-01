import { Component, Input } from '@angular/core';
import { Optional } from '@interfaces/optional/optional';

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.scss']
})
export class OptionalComponent {
  @Input({required: true}) option: Optional = {} as Optional;
}
