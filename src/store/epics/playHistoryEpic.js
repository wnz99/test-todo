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
        map(item => {
          const { isSnapshot, data } = item;
          if (isSnapshot) {
            return tasks.snapshot.restore(data);
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
