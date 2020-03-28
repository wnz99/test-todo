import { createActions } from 'redux-actions';

const tasks = createActions(
  {
    ADD: task => {
      return task;
    },
  },
  { namespace: '_' }
);

export default tasks;
