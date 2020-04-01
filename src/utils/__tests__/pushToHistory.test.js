import pushToHistory from '../pushToHistory';

describe('pushToHistory function', () => {
  it('should save an action', () => {
    const prevHistory = [];

    let action = {
      type: 'TEST',
      payload: 'test data',
    };

    let expectedHistory = [
      {
        isPatch: false,
        data: action,
      },
    ];

    let nextHistory = pushToHistory(prevHistory, action);

    expect(nextHistory).toEqual(expectedHistory);

    action = {
      type: 'TEST',
      payload: 'test data 2',
    };

    expectedHistory = [
      ...expectedHistory,
      {
        isPatch: false,
        data: action,
      },
    ];

    nextHistory = pushToHistory(nextHistory, action);

    expect(nextHistory).toEqual(expectedHistory);
  });

  it('should save an list state', () => {
    const prevHistory = [];

    let list = [1, 2, 3];
    let last = { a: 'a' };

    let expectedHistory = [
      {
        isPatch: true,
        data: { last, list },
      },
    ];

    let nextHistory = pushToHistory(prevHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);

    list = [4, 5, 7];
    last = { b: 'b' };

    expectedHistory = [
      ...expectedHistory,
      {
        isPatch: true,
        data: { last, list },
      },
    ];

    nextHistory = pushToHistory(nextHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);
  });
});
