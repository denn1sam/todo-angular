import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddTodo, DelTodo, DoneTodo, EditTodo } from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {

  constructor(private readonly store: Store<AddTodo>) {
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
