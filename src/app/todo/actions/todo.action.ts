import { Action } from '@ngrx/store';
import { Todo } from '../models';

export enum TodoActionTypes {
  FETCH_TODO = '[TODO] fetch todos',
  SET_TODO = '[TODO] set todos',
  SET_TO_LOCAL_STORAGE_TODO = '[TODO] set todos to localstorage',
  ADD_TODO = '[TODO] add todo',
  DEL_TODO = '[TODO] delete todo',
  DONE_TODO = '[TODO] done todo',
  EDIT_TODO = '[TODO] edit todo',
}

export class FetchTodos implements Action {
  readonly type = TodoActionTypes.FETCH_TODO;

  constructor() {}
}

export class SetTodos implements Action {
  readonly type = TodoActionTypes.SET_TODO;

  constructor(readonly initialState: Array<Todo>) {}
}

export class SetTodosToLocalStorage implements Action {
  readonly type = TodoActionTypes.SET_TO_LOCAL_STORAGE_TODO;

  constructor(readonly currentState: Array<Todo>) {}
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.ADD_TODO;

  constructor(readonly text: string) {}
}

export class DelTodo implements Action {
  readonly type = TodoActionTypes.DEL_TODO;

  constructor(readonly id: number) {}
}

export class DoneTodo implements Action {
  readonly type = TodoActionTypes.DONE_TODO;

  constructor(readonly id: number) {}
}

export class EditTodo implements Action {
  readonly type = TodoActionTypes.EDIT_TODO;

  constructor(
    readonly id: number,
    readonly text: string,
  ) {}
}

export type TodoActions = FetchTodos
  | SetTodos
  | SetTodosToLocalStorage
  | AddTodo
  | DelTodo
  | DoneTodo
  | EditTodo
  ;