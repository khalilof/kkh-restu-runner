import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  @Input() checked: boolean | null = false;
  @Input() label = 'Label here';
  @Output() switched = new EventEmitter<boolean>();

  onChange($event: Event) {
    this.switched.emit(($event.target as HTMLInputElement).checked);
  }

}
