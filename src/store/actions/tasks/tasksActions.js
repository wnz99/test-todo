import { createActions } from 'redux-actions';

const tasks = createActions(
  {
    ADD: task => {
      console.log(task);
      return task;
    },
  },
  { namespace: '_' }
);

export default tasks;
