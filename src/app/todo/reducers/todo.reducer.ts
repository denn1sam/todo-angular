import { Todo } from '../models/todo.model';
import { TodoActions, TodoActionTypes } from '../actions';

export const TODO_FEATURE_KEY = 'todo';

export function todoReducer(state: Array<Todo>, action: TodoActions): Array<Todo> {
  let currentItem: Todo;
  let index: number;

  state = state ? state : [];

  switch (action.type) {
    case TodoActionTypes.SET_TODO:
      return action.initialState;
    case TodoActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: +new Date().getTime(),
          text: action.text,
          done: false,
        }
      ];
    case TodoActionTypes.DEL_TODO:
      return state.filter((item) => item.id !== action.id);
    case TodoActionTypes.DONE_TODO:
      currentItem = state.find((item) => item.id === action.id);
      index = state.indexOf(currentItem);

      return [
        ...state.slice(0, index),
        Object.assign({}, currentItem, { done: !currentItem.done }),
        ...state.slice(index + 1),
      ];

    case TodoActionTypes.EDIT_TODO:
      currentItem = state.find((item) => item.id === action.id);
      index = state.indexOf(currentItem);

      return [
        ...state.slice(0, index),
        Object.assign({}, currentItem, { text: action.text }),
        ...state.slice(index + 1),
      ];

    default:
      return state;
    }
}
