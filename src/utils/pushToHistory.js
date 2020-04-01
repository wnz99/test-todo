/* eslint-disable no-unused-vars */
import { original } from 'immer';
import makePatches from './makePatches';
import makeSnapshotState from './makeShapshotState';

const pushToHistory = (prevHistory, data) => {
  if (!data.type) {
    const { list, last } = original(data);

    const lastSnapshotState = makeSnapshotState(
      original(prevHistory),
      last.patchesIndex
    );

    const [nextState, patches, inversePatches] = makePatches(
      lastSnapshotState,
      {
        list,
      }
    );

    const historyEntry = {
      isPatch: true,
      data: {
        patches,
        last,
      },
    };

    return [...prevHistory, historyEntry];
  }

  const historyEntry = {
    isPatch: false,
    data: { ...data, type: data.type.toString() },
  };

  return [...prevHistory, historyEntry];
};

export default pushToHistory;
