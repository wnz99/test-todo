import pushToHistory from '../pushToHistory';
import makePatches from '../makePatches';
import makeSnapshotState from '../makeShapshotState';

jest.mock('../makePatches');
jest.mock('../makeShapshotState');

makeSnapshotState.mockReturnValue('snapshot');
makePatches.mockReturnValue([null, 'patches', null]);

describe('pushToHistory function', () => {
  beforeEach(() => {
    makeSnapshotState.mockClear();
    makePatches.mockClear();
  });
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
    expect(makeSnapshotState).not.toHaveBeenCalled();
    expect(makePatches).not.toHaveBeenCalled();

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
    expect(makeSnapshotState).not.toHaveBeenCalled();
    expect(makePatches).not.toHaveBeenCalled();
  });

  it('should save patches', () => {
    const prevHistory = [];

    let list = [1, 2, 3];
    let last = { patchesIndex: [1] };

    let expectedHistory = [
      {
        isPatch: true,
        data: { last, patches: 'patches' },
      },
    ];

    let nextHistory = pushToHistory(prevHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);
    expect(makeSnapshotState).toHaveBeenNthCalledWith(
      1,
      prevHistory,
      last.patchesIndex
    );
    expect(makePatches).toHaveBeenNthCalledWith(1, 'snapshot', { list });

    list = [4, 5, 7];
    last = { patchesIndex: [2] };

    expectedHistory = [
      ...expectedHistory,
      {
        isPatch: true,
        data: { last, patches: 'patches' },
      },
    ];

    nextHistory = pushToHistory(nextHistory, { list, last });

    expect(nextHistory).toEqual(expectedHistory);
  });
});
