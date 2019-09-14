import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  ADD_TODO = '[TODO] add todo',
  DEL_TODO = '[TODO] delete todo',
  DONE_TODO = '[TODO] done todo',
  EDIT_TODO = '[TODO] edit todo',
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

export type TodoActions = AddTodo
  | DelTodo
  | DoneTodo
  | EditTodo
  ;