/* eslint-disable no-param-reassign */
import { handleActions } from 'redux-actions';
import produce from 'immer';
import actions from '../../actions';
// import u from 'updeep';

export const INITIAL_STATE = {
  last: {
    id: 0,
    createdAt: null,
  },
  list: {},
};

const tasksReducer = handleActions(
  {
    [actions.tasks.add]: produce((draft, action) => {
      const {
        payload: { createdAt },
      } = action;

      draft.last.id += 1;
      draft.last.createdAt = createdAt;
      draft.list[draft.last.id] = { id: draft.last.id, ...action.payload };
    }),
  },
  INITIAL_STATE
);

export default tasksReducer;
