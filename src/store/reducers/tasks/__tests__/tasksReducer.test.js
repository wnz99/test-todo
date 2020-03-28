import tasksReducer, { INITIAL_STATE } from '../tasksReducer';
import actions from '../../../actions/tasks';

describe('tasks reducer', () => {
  it('should add tasks to the list', () => {
    const firstAction = {
      type: actions.add,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 1234,
      },
    };

    let expecteState = {
      last: {
        id: 1,
        createdAt: 1234,
      },
      list: {
        '1': {
          id: 1,
          ...firstAction.payload,
        },
      },
    };

    let newState = tasksReducer(INITIAL_STATE, firstAction);
    expect(newState).toEqual(expecteState);

    const secondAction = {
      type: actions.add,
      payload: {
        name: 'test_task_2',
        description: 'a new task',
        createdAt: 6789,
      },
    };

    expecteState = {
      last: {
        id: 2,
        createdAt: 6789,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          ...secondAction.payload,
        },
      },
    };

    newState = tasksReducer(newState, secondAction);
    expect(newState).toEqual(expecteState);
  });
});
