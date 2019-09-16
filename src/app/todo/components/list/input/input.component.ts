import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() inputValue: EventEmitter<any> = new EventEmitter();
  @Input() currentValue: string;

  value: string;

  constructor() { }

  ngOnInit(): void {
    this.value = this.currentValue ? this.currentValue : '';
  }

  inputValueChanged(event: any): void {
    this.inputValue.emit(event.target.value);
  }
}
