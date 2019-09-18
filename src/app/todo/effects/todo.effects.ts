import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { TodoActions, TodoActionTypes, FetchTodos, SetTodosToLocalStorage } from '../actions';
import { TodoFacade } from '../components/list/todo.facade';

@Injectable()
export class TodoEffects {

  @Effect({ dispatch: false })
  fetchTodos$ = this.actions$.pipe(
    ofType<FetchTodos>(TodoActionTypes.FETCH_TODO),
    map(() => {
      const state = JSON.parse(localStorage.getItem('todos'));
      this.todoFacade.setTodos(state);
    }),
  );

  @Effect({ dispatch: false })
  setTodosToLocalStorage$ = this.actions$.pipe(
    ofType<SetTodosToLocalStorage>(TodoActionTypes.SET_TO_LOCAL_STORAGE_TODO),
    map(({currentState}) => {
      localStorage.setItem('todos', JSON.stringify(currentState));
    }),
  );

  constructor(
    private readonly actions$: Actions<TodoActions>,
    private readonly todoFacade: TodoFacade,
  ) {}
}
