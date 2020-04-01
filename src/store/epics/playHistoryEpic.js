import {
  filter,
  map,
  takeUntil,
  switchMap,
  concatMap,
  delay,
  endWith,
} from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ofType } from 'redux-observable';

import actions from '../actions';
import makeSnapshotState from '../../utils/makeShapshotState';

const { tasks } = actions;

const DELAY = 1000;

const playHistoryEpic = (action$, state$) =>
  action$.pipe(
    ofType(tasks.status.play.toString()),
    switchMap(() => {
      return from(state$.value.tasks.history).pipe(
        concatMap((item, index) =>
          of(item).pipe(delay(index === 0 ? 0 : DELAY))
        ),
        map((item, index) => {
          const { isPatch, data } = item;

          if (isPatch) {
            const history = [...state$.value.tasks.history, item];
            const patchesIndex = [...data.last.patchesIndex, index];

            const lastSnapshotState = makeSnapshotState(history, patchesIndex);

            const payload = {
              list: { ...lastSnapshotState.list },
              last: { ...data.last },
            };
            return tasks.snapshot.restore(payload);
          }

          return data;
        }),
        endWith(tasks.status.play(false)),
        takeUntil(
          state$.pipe(filter(state => state.tasks.status.isPlaying === false))
        )
      );
    })
  );

export default playHistoryEpic;
