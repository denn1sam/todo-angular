import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddTodo, DelTodo, DoneTodo, EditTodo, FetchTodos, SetTodos, SetTodosToLocalStorage } from '../../actions';
import { Todo } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {

  constructor(private readonly store: Store<AddTodo>) {
  }

  fetchTodos(): void {
    this.store.dispatch(new FetchTodos());
  }

  setTodos(initialState: Array<Todo>) {
    this.store.dispatch(new SetTodos(initialState));
  }

  setTodosToLocaleStorage(state: Array<Todo>) {
    this.store.dispatch(new SetTodosToLocalStorage(state));
  }

  addTodo(text: string): void {
    this.store.dispatch(new AddTodo(text));
  }

  delTodo(id: number): void {
    this.store.dispatch(new DelTodo(id));
  }

  doneTodo(id: number): void {
    this.store.dispatch(new DoneTodo(id));
  }

  editTodo(id: number, text: string): void {
    this.store.dispatch(new EditTodo(id, text));
  }
}
