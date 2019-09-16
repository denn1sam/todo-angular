import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models';

import { TodoFacade } from './todo.facade';
import { TODO_FEATURE_KEY } from '../../reducers';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos: Array<Todo>;
  inputValue: string;

  todosLength: number;
  doneCount: number;

  constructor(
    readonly todoFacade: TodoFacade,
    readonly store: Store<Array<Todo>>,
  ) {
  }

  ngOnInit(): void {
    this.store.select(TODO_FEATURE_KEY).subscribe((todos) => {
      this.todos = todos;
      this.setTodoItemsGeneralInfo(todos);
    });
  }

  setInputValue(text: string): void {
    this.inputValue = text;
  }

  addTodo() {
    if (this.inputValue && this.inputValue.length) {
      this.todoFacade.addTodo(this.inputValue);
    }
  }

  editTodo(id: number, text: string) {
    this.todoFacade.editTodo(id, text);
  }

  setTodoItemsGeneralInfo(todos: Todo[]): void {
    this.todosLength = todos.length;
    this.doneCount = todos.filter((item) => item.done).length;
  }
}
