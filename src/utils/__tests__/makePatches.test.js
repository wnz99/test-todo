/* eslint-disable no-unused-vars */
import makePatch from '../makePatches';

const prev = {
  list: {
    a: 'a',
    c: 'c',
  },
};

const curr = [
  {
    list: {
      a: 'a',
      f: 'f',
    },
  },
  {
    list: {
      a: 'a',
      f: 'f',
      g: 'g',
    },
  },
  {
    list: {
      g: 'g',
    },
  },
];

describe('makePatch function', () => {
  it('should make a patch', () => {
    let [state, patches, inversePatches] = makePatch(prev, curr[0]);

    expect(state).toEqual(curr[0]);
    [state, patches, inversePatches] = makePatch(state, curr[1]);
    expect(state).toEqual(curr[1]);
    [state, patches, inversePatches] = makePatch(state, curr[2]);
    expect(state).toEqual(curr[2]);
  });
});
