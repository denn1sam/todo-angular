import { Todo } from '../models';
import { AddTodo, DelTodo, DoneTodo } from '../actions';
import { todoReducer } from './todo.reducer';

describe('Todo Reducer', () => {
  let currentState: Todo[];

  beforeEach(() => {
    currentState = [{
      id: undefined,
      text: undefined,
      done: undefined,
    }];
  });

  it('should add todo', () => {
    const action = new AddTodo('test');
    const result = todoReducer(currentState, action);

    expect(result).toEqual([ ...currentState, {
      id: +new Date().getTime(),
      text: 'test',
      done: false,
    }]);
  });

  it('should del todo', () => {
    const action = new DelTodo(+new Date().getTime());
    const result = todoReducer(currentState, action);

    const deletedTodo = result.find((todo) => todo.id === +new Date().getTime());

    expect(deletedTodo).toBeFalsy();
  });

  // it('should done todo', () => {
  //   const action = new DoneTodo(+new Date().getTime());
  //   const result = todoReducer(currentState, action);

  //   const doneTodo = result.find((todo) => {
  //     todo.id === +new Date().getTime()
  //   });

  //   expect(doneTodo.done).toEqual(true);
  // });

  // describe('an unknown action', () => {
  //   it('should return the previous state', () => {
  //     const action = {} as any;

  //     const result = paymentMethodReducer(initialState, action);

  //     expect(result).toBe(initialState);
  //   });
  // });

  // describe('an initial state', () => {
  //   it('should return the initial state', () => {
  //     const action = {} as any;
  //     const result = paymentMethodReducer(undefined, action);

  //     expect(result).toEqual(currentState);
  //   });
  // });
});
