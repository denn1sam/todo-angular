import { Todo } from '../models/todo.model';
import { TodoActions, TodoActionTypes } from '../actions';

export const initialState: Array<Todo> = [
  {
    id: +new Date().getTime(),
    text: 'eat',
    done: false,
  },
  {
    id: +new Date().getTime() + 1,
    text: 'seat',
    done: false,
  },
  {
    id: +new Date().getTime() + 2,
    text: 'qwe',
    done: true,
  },
];

export const TODO_FEATURE_KEY = 'todo';

export function todoReducer(state: Array<Todo> = initialState, action: TodoActions): Array<Todo> {
  let currentItem: Todo;
  let index: number;

  switch (action.type) {
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
