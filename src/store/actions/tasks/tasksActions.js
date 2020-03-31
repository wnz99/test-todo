import { createActions } from 'redux-actions';

const tasks = createActions(
  {
    CREATE: task => task,
    UPDATE: task => task,
    DELETE: id => id,
    SNAPSHOT: {
      CREATE: undefined,
    },
    STATUS: {
      SET: status => status,
    },
    HISTORY: {
      DELETE: undefined,
    },
  },
  { namespace: '_' }
);

export default tasks;
