import pushToTasksHistory from '../pushToTasksHistory';

describe('pushToTasksHistory function', () => {
  it('should save an action', () => {
    const prevHistory = [];

    let action = {
      type: 'TEST',
      payload: 'test data',
    };

    let expectedHistory = [
      {
        isSnapshot: false,
        data: action,
      },
    ];

    let nextHistory = pushToTasksHistory(prevHistory, action);

    expect(nextHistory).toEqual(expectedHistory);

    action = {
      type: 'TEST',
      payload: 'test data 2',
    };

    expectedHistory = [
      ...expectedHistory,
      {
        isSnapshot: false,
        data: action,
      },
    ];

    nextHistory = pushToTasksHistory(nextHistory, action);

    expect(nextHistory).toEqual(expectedHistory);
  });

  it('should save an list state', () => {
    const prevHistory = [];

    let list = [1, 2, 3];
    let last = { a: 'a' };

    let expectedHistory = [
      {
        isSnapshot: true,
        data: { last, list },
      },
    ];

    let nextHistory = pushToTasksHistory(prevHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);

    list = [4, 5, 7];
    last = { b: 'b' };

    expectedHistory = [
      ...expectedHistory,
      {
        isSnapshot: true,
        data: { last, list },
      },
    ];

    nextHistory = pushToTasksHistory(nextHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);
  });
});
