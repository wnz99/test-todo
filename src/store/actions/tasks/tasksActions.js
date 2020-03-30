import { createActions } from 'redux-actions';

const tasks = createActions(
  {
    CREATE: task => task,
    UPDATE: task => task,
    DELETE: id => id,
  },
  { namespace: '_' }
);

export default tasks;
