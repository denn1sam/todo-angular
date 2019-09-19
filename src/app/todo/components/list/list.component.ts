import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models';

import { TodoFacade } from './todo.facade';
import { TODO_FEATURE_KEY } from '../../reducers';
import { InputComponent } from './input/input.component';

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

  @ViewChild(InputComponent, {static: false}) inputComponent: InputComponent;

  constructor(
    readonly todoFacade: TodoFacade,
    readonly store: Store<Array<Todo>>,
  ) {
  }

  ngOnInit(): void {
    this.todoFacade.fetchTodos();
    this.store.select(TODO_FEATURE_KEY).subscribe((todos) => {
      this.todos = todos;
      this.setTodoItemsGeneralInfo(todos);
      this.todoFacade.setTodosToLocaleStorage(todos);
    });
  }

  setInputValue(text: string): void {
    this.inputValue = text;
  }

  addTodo() {
    if (this.inputValue && this.inputValue.length) {
      this.todoFacade.addTodo(this.inputValue);
      this.inputComponent.clearInput();
    }
  }

  setTodoItemsGeneralInfo(todos: Todo[]): void {
    this.todosLength = todos && todos.length;
    this.doneCount = todos && todos.filter((item) => item.done).length;
  }
}
