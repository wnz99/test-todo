import omit from 'lodash/omit';
import tasksReducer, { INITIAL_STATE } from '../tasksReducer';
import actions from '../../../actions/tasks';
import * as utils from '../../../../utils';
import pushToHistory from '../../../../utils/pushToHistory';

jest.mock('../../../../utils', () => ({
  pushToHistory: jest.fn(),
}));

utils.pushToHistory.mockImplementation(pushToHistory);

describe('tasks reducer', () => {
  it('should add a task', () => {
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_2',
        description: 'a new task',
        createdAt: 200,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should update a task', () => {
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    addTaskAction = {
      type: actions.update,
      payload: {
        id: 1,
        name: 'test_task_update',
        description: 'a new task update',
        updatedAt: 200,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        ...expecteState.list,
        '1': {
          id: 1,
          createdAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should delete a task', () => {
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    addTaskAction = {
      type: actions.delete,
      payload: 1,
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {},
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should restore a snapshot', () => {
    const readSnapshotAction = {
      type: actions.snapshot.restore,
      payload: { list: { list: 'list' }, last: { last: 'last' } },
    };

    const expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        last: 'last',
      },
      list: { list: 'list' },
    };

    const nextState = tasksReducer(INITIAL_STATE, readSnapshotAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should create a snapshot when recording starts', () => {
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_2',
        description: 'a new task',
        createdAt: 200,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    const startRecordingAction = {
      type: actions.status.record,
      payload: true,
    };

    const expectedHistory = [
      {
        isPatch: true,
        data: { list: nextState.list, last: nextState.last },
      },
    ];

    expecteState = {
      ...expecteState,
      status: {
        ...expecteState.status,
        isRecording: true,
      },
      history: expectedHistory,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, startRecordingAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should delete history', () => {
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: { isRecording: false, isPlaying: false },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_2',
        description: 'a new task',
        createdAt: 200,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    const startRecordingAction = {
      type: actions.status.record,
      payload: true,
    };

    const expectedHistory = [
      {
        isPatch: true,
        data: { list: nextState.list, last: nextState.last },
      },
    ];

    expecteState = {
      ...expecteState,
      status: {
        ...expecteState.status,
        isRecording: true,
      },
      history: expectedHistory,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, startRecordingAction);
    expect(nextState).toEqual(expecteState);

    const clearHistoryAction = {
      type: actions.history.delete,
      payload: undefined,
    };

    expecteState = {
      ...expecteState,
      history: [],
    };

    nextState = tasksReducer(nextState, clearHistoryAction);
    expect(nextState).toEqual(expecteState);
  });

  it('should record tasks', () => {
    // Add action
    let addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_1',
        description: 'a new task',
        createdAt: 100,
      },
    };

    let expecteState = {
      status: {
        isRecording: false,
        isPlaying: false,
      },
      history: [],
      last: {
        id: 1,
        createdAt: 100,
      },
      list: {
        '1': {
          id: 1,
          updatedAt: 100,
          ...addTaskAction.payload,
        },
      },
    };

    let nextState = tasksReducer(INITIAL_STATE, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Add action
    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_2',
        description: 'a new task',
        createdAt: 200,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Start recording
    const startRecordingAction = {
      type: actions.status.record,
      payload: true,
    };

    let expectedHistory = [
      {
        isPatch: true,
        data: { list: nextState.list, last: nextState.last },
      },
    ];

    expecteState = {
      ...expecteState,
      status: {
        ...expecteState.status,
        isRecording: true,
      },
      history: expectedHistory,
      last: {
        id: 2,
        createdAt: 200,
      },
      list: {
        ...expecteState.list,
        '2': {
          id: 2,
          updatedAt: 200,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, startRecordingAction);
    expect(nextState).toEqual(expecteState);

    // Add action 1
    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_3',
        description: 'a new task',
        createdAt: 300,
      },
    };

    expectedHistory = {
      isPatch: false,
      data: {
        ...addTaskAction,
        type: addTaskAction.type.toString(),
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 3,
        createdAt: 300,
      },
      history: [...expecteState.history, expectedHistory],
      list: {
        ...expecteState.list,
        '3': {
          id: 3,
          updatedAt: 300,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Add action 2
    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_4',
        description: 'a new task',
        createdAt: 400,
      },
    };

    expectedHistory = {
      isPatch: false,
      data: {
        ...addTaskAction,
        type: addTaskAction.type.toString(),
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 4,
        createdAt: 400,
      },
      history: [...expecteState.history, expectedHistory],
      list: {
        ...expecteState.list,
        '4': {
          id: 4,
          updatedAt: 400,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Update action 3
    addTaskAction = {
      type: actions.update,
      payload: {
        id: 4,
        name: 'test_task_4_update',
        description: 'a new task update',
        updatedAt: 410,
      },
    };

    expectedHistory = {
      isPatch: false,
      data: {
        ...addTaskAction,
        type: addTaskAction.type.toString(),
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 4,
        createdAt: 400,
      },
      history: [...expecteState.history, expectedHistory],
      list: {
        ...expecteState.list,
        '4': {
          id: 4,
          createdAt: 400,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Delete action 4
    addTaskAction = {
      type: actions.delete,
      payload: 2,
    };

    expectedHistory = {
      isPatch: false,
      data: {
        ...addTaskAction,
        type: addTaskAction.type.toString(),
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 4,
        createdAt: 400,
      },
      history: [...expecteState.history, expectedHistory],
      list: omit(expecteState.list, ['2']),
    };

    nextState = tasksReducer(nextState, addTaskAction);
    expect(nextState).toEqual(expecteState);

    // Stop recording
    const stopRecordingAction = {
      type: actions.status.record,
      payload: false,
    };

    expectedHistory = [
      {
        isPatch: true,
        data: nextState.list,
      },
    ];

    expecteState = {
      ...expecteState,
      status: {
        ...expecteState.status,
        isRecording: false,
      },
      last: {
        id: 4,
        createdAt: 400,
      },
    };

    nextState = tasksReducer(nextState, stopRecordingAction);
    expect(nextState).toEqual(expecteState);

    // Add action
    addTaskAction = {
      type: actions.create,
      payload: {
        name: 'test_task_5',
        description: 'a new task',
        createdAt: 500,
      },
    };

    expecteState = {
      ...expecteState,
      last: {
        id: 5,
        createdAt: 500,
      },
      list: {
        ...expecteState.list,
        '5': {
          id: 5,
          updatedAt: 500,
          ...addTaskAction.payload,
        },
      },
    };

    nextState = tasksReducer(nextState, addTaskAction);

    expect(nextState).toEqual(expecteState);
    expect(utils.pushToHistory).toHaveBeenCalledTimes(5);
  });
});
