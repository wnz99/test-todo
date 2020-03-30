/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';
import omit from 'lodash/omit';
import actions from '../../actions';

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
  last: {
    id: 0,
    createdAt: null,
  },
  list: {},
};

export const INITIAL_STATE = {
  last: {
    id: 3,
    createdAt: 1585554146,
  },
  list: { ...items },
};

const tasksReducer = handleActions(
  {
    [actions.tasks.create]: produce((draft, action) => {
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
    [actions.tasks.update]: produce((draft, action) => {
      const {
        payload: { id },
      } = action;

      draft.list[id] = { ...draft.list[id], ...action.payload };
    }),
    [actions.tasks.delete]: produce((draft, action) => {
      const id = action.payload;

      draft.list = omit(draft.list, [id]);
    }),
  },
  INITIAL_STATE
);

export default tasksReducer;
