/* eslint-disable no-param-reassign */
import { handleActions, combineActions } from 'redux-actions';
import produce from 'immer';
import omit from 'lodash/omit';

import actions from '../../actions';
import { pushToTasksHistory } from '../../../utils';

const items = {
  '1': {
    id: 1,
    name: 'Item 1',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    createdAt: 337305600,
  },
  '2': {
    id: 2,
    name: 'Item 2',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    createdAt: 507686400,
  },
  '3': {
    id: 3,
    name: 'Item 3',
    description:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.',
    createdAt: 1585554146,
  },
};

export const INITIAL_STATE_DEV = {
  status: { isRecording: false, isPlaying: false },
  last: {
    id: 3,
    createdAt: 1585554146,
  },
  history: [],
  list: { ...items },
};

export const INITIAL_STATE = {
  status: { isRecording: false, isPlaying: false },
  last: {
    id: 0,
    createdAt: null,
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
    [tasks.status.set]: produce((draft, action) => {
      const { payload } = action;

      if (payload.isRecording) {
        draft.history = pushToTasksHistory(draft.history, draft.list);
      }

      draft.status = { ...draft.status, ...payload };
    }),
    [tasks.history.delete]: produce(draft => {
      draft.history = [];
    }),
    [combineActions(tasks.create, tasks.update, tasks.delete)]: produce(
      (draft, action) => {
        if (draft.status.isRecording) {
          draft.history = pushToTasksHistory(draft.history, action);
        }
      }
    ),
  },
  INITIAL_STATE
);

export default tasksReducer;
