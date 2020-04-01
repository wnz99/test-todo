/* eslint-disable no-param-reassign */
import { enablePatches, produceWithPatches } from 'immer';
import isEqual from 'lodash/isEqual';

enablePatches();

const makePatches = (prevState, currState) => {
  const [nextState, patches, inversePatches] = produceWithPatches(
    prevState,
    draft => {
      // Delete removed keys
      Object.entries(draft.list).forEach(entry => {
        const [key] = entry;

        if (!currState.list[key]) {
          delete draft.list[key];
        }
      });

      // Update existing keys
      Object.entries(currState.list).forEach(entry => {
        const [key, value] = entry;

        if (!isEqual(draft.list[key], value)) {
          draft.list[key] = value;
        }
      });
    }
  );

  return [nextState, patches, inversePatches];
};

export default makePatches;
