import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo/models';

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() todoItem: Todo;

  text: string;
  done: boolean;
  id: number;

  constructor() {
  }

  ngOnInit() {
    this.text = this.todoItem.text;
    this.done = this.todoItem.done;
    this.id = this.todoItem.id;
  }

}
