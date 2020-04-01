/* eslint-disable no-param-reassign */
import { handleActions, combineActions } from 'redux-actions';
import produce from 'immer';
import omit from 'lodash/omit';

import actions from '../../actions';
import { pushToHistory } from '../../../utils';

export const INITIAL_STATE = {
  status: { isRecording: false, isPlaying: false },
  last: {
    id: 0,
    createdAt: null,
    patchesIndex: [],
  },
  history: [],
  list: {},
};

const { tasks } = actions;

const tasksReducer = handleActions(
  {
    [tasks.create]: produce((draft, action) => {
      const {
        payload: { createdAt },
      } = action;

      draft.last.id += 1;
      draft.last = { ...draft.last, createdAt };
      draft.list[draft.last.id] = {
        id: draft.last.id,
        updatedAt: createdAt,
        ...action.payload,
      };
    }),
    [tasks.update]: produce((draft, action) => {
      const {
        payload: { id },
      } = action;

      draft.list[id] = { ...draft.list[id], ...action.payload };
    }),
    [tasks.delete]: produce((draft, action) => {
      const { payload } = action;

      draft.list = omit(draft.list, [payload]);
    }),
    [tasks.status.play]: produce((draft, action) => {
      const { payload } = action;

      draft.status = { ...draft.status, isPlaying: payload };
    }),
    [tasks.status.record]: produce((draft, action) => {
      const { payload } = action;

      if (payload) {
        draft.history = pushToHistory(draft.history, draft);
        draft.last.patchesIndex.push(draft.history.length - 1);
      }

      draft.status = { ...draft.status, isRecording: payload };
    }),
    [tasks.history.delete]: produce(draft => {
      draft.history = [];
    }),
    [tasks.snapshot.restore]: produce((draft, action) => {
      const {
        payload: { last, list },
      } = action;

      draft.last = { ...last };
      draft.list = { ...list };
    }),
    [combineActions(tasks.create, tasks.update, tasks.delete)]: produce(
      (draft, action) => {
        if (draft.status.isRecording) {
          draft.history = pushToHistory(draft.history, action);
        }
      }
    ),
  },
  {}
);

export default tasksReducer;
