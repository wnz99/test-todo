import tasksReducer, { INITIAL_STATE_DEV } from '../tasksReducer';
import actions from '../../../actions/tasks';

describe('tasks reducer', () => {
  it('should add a task', () => {
    const firstAction = {
      type: actions.create,
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
          updatedAt: 1234,
          ...firstAction.payload,
        },
      },
    };

    let newState = tasksReducer(INITIAL_STATE_DEV, firstAction);
    expect(newState).toEqual(expecteState);

    const secondAction = {
      type: actions.create,
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
          updatedAt: 6789,
          ...secondAction.payload,
        },
      },
    };

    newState = tasksReducer(newState, secondAction);
    expect(newState).toEqual(expecteState);
  });

  it('should update a task', () => {
    const firstAction = {
      type: actions.create,
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
          updatedAt: 1234,
          ...firstAction.payload,
        },
      },
    };

    let newState = tasksReducer(INITIAL_STATE_DEV, firstAction);
    expect(newState).toEqual(expecteState);

    const secondAction = {
      type: actions.update,
      payload: {
        id: 1,
        name: 'test_task_update',
        description: 'a new task update',
        updatedAt: 6789,
      },
    };

    expecteState = {
      last: {
        id: 1,
        createdAt: 1234,
      },
      list: {
        ...expecteState.list,
        '1': {
          id: 1,
          createdAt: 1234,
          ...secondAction.payload,
        },
      },
    };

    newState = tasksReducer(newState, secondAction);
    expect(newState).toEqual(expecteState);
  });

  it('should delete a task', () => {
    const firstAction = {
      type: actions.create,
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
          updatedAt: 1234,
          ...firstAction.payload,
        },
      },
    };

    let newState = tasksReducer(INITIAL_STATE_DEV, firstAction);
    expect(newState).toEqual(expecteState);

    const secondAction = {
      type: actions.delete,
      payload: 1,
    };

    expecteState = {
      last: {
        id: 1,
        createdAt: 1234,
      },
      list: {},
    };

    newState = tasksReducer(newState, secondAction);
    expect(newState).toEqual(expecteState);
  });
});
