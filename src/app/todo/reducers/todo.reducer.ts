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
  let currentItem;

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
      currentItem.done = true;

      return state;
    case TodoActionTypes.EDIT_TODO:
      currentItem = state.find((item) => item.id === action.id);
      currentItem.text = action.text;

      return state;

    default:
      return state;
  }
}
