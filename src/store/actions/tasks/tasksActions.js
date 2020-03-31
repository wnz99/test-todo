import { createActions } from 'redux-actions';

const tasks = createActions(
  {
    CREATE: undefined,
    UPDATE: undefined,
    DELETE: undefined,
    SNAPSHOT: {
      RESTORE: undefined,
    },
    STATUS: {
      SET: undefined,
      PLAY: undefined,
      RECORD: undefined,
    },
    HISTORY: {
      DELETE: undefined,
    },
  },
  { namespace: '_' }
);

export default tasks;
