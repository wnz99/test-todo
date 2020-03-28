import { filter, mapTo } from 'rxjs/operators';

const noopEpic = action$ =>
  action$.pipe(
    filter(action => action.type === 'NOOP_RUN'),
    mapTo({ type: 'NOOP' })
  );

export default noopEpic;
