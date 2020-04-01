import { applyPatches } from 'immer';

const makeSnapshotState = (prevHistory, patchesIndex) => {
  return patchesIndex.reduce(
    (curr, snapShotIndex) => {
      return applyPatches(curr, prevHistory[snapShotIndex].data.patches);
    },
    { list: {} }
  );
};

export default makeSnapshotState;
