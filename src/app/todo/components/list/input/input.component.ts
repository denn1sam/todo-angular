import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() inputValue: EventEmitter<any> = new EventEmitter();

  value: any;

  constructor() { }

  inputValueChanged(event: any): void {
    this.inputValue.emit(event.target.value);
  }
}
