import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo/models';
import { TodoFacade } from '../todo.facade';

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

  editStatus: boolean;

  constructor(
    readonly todoFacade: TodoFacade,
  ) {
  }

  ngOnInit() {
    this.text = this.todoItem.text;
    this.done = this.todoItem.done;
    this.id = this.todoItem.id;
  }

  doneTodo() {
    this.todoFacade.doneTodo(this.id);
  }

  delTodo() {
    this.todoFacade.delTodo(this.id);
  }

  editStatusTodo() {
    if (!this.done) {
      this.editStatus = true;
    }
  }

  setInputValue(text) {
    this.text = text;
  }

  editTodo() {
    if (this.text.length) {
      this.todoFacade.editTodo(this.id, this.text);
      this.editStatus = false;
    }
  }
}
