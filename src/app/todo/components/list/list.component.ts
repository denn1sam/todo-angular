import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models';

import { TodoFacade } from './todo.facade';
import { TODO_FEATURE_KEY } from '../../reducers';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  todos: Array<Todo>;
  inputValue: any;

  constructor(
    readonly todoFacade: TodoFacade,
    readonly store: Store<Array<Todo>>,
  ) {
    store.select(TODO_FEATURE_KEY).subscribe((todos) => this.todos = todos);
  }

  setInputValue(text: string): void {
    this.inputValue = text;
  }

  addTodo() {
    this.todoFacade.addTodo(this.inputValue);
  }

  delTodo(id: number) {
    this.todoFacade.delTodo(id);
  }

  doneTodo(id: number) {
    this.todoFacade.doneTodo(id);
  }

  editTodo(id: number, text: string) {
    this.todoFacade.editTodo(id, text);
  }
}
