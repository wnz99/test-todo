import { TestScheduler } from 'rxjs/testing';
import { StateObservable } from 'redux-observable';

import playHistoryEpic from '../playHistoryEpic';
import actions from '../../actions';

const { tasks } = actions;

let testScheduler;

describe('playHistoryEpic function', () => {
  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should emit 1 second delayed actions', () => {
    const mockData = [
      { type: 'ADD1' },
      { type: 'ADD2' },
      { type: 'ADD3' },
      'snapshot',
    ];

    const mockHistory = [
      {
        isPatch: false,
        data: mockData[0],
      },
      {
        isPatch: false,
        data: mockData[1],
      },
      {
        isPatch: false,
        data: mockData[2],
      },
      {
        isPatch: true,
        data: mockData[3],
      },
    ];

    const values = {
      a: {
        tasks: {
          history: mockHistory,
          status: {
            isPlaying: true,
          },
        },
      },
    };

    testScheduler.run(({ cold, expectObservable }) => {
      const action$ = cold('a', {
        a: tasks.status.play(true),
      });
      const state$ = new StateObservable(cold('a', values));

      const output$ = playHistoryEpic(action$, state$);

      const expectedValues = {
        a: {
          ...mockData[0],
        },
        b: {
          ...mockData[1],
        },
        c: {
          ...mockData[2],
        },
        d: tasks.snapshot.restore(mockData[3]),
        e: tasks.status.play(false),
      };

      expectObservable(output$).toBe(
        'a 999ms b 999ms c 999ms (de)',
        expectedValues
      );
    });
  });

  it('should terminate if user stops playing', () => {
    const mockData = [{ type: 'ADD1' }, { type: 'ADD2' }, { type: 'ADD3' }];

    const mockHistory = [
      {
        isPatch: false,
        data: mockData[0],
      },
      {
        isPatch: false,
        data: mockData[1],
      },
      {
        isPatch: false,
        data: mockData[2],
      },
    ];

    const values = {
      a: {
        tasks: {
          history: mockHistory,
          status: {
            isPlaying: true,
          },
        },
      },
      b: {
        tasks: {
          status: {
            isPlaying: false,
          },
        },
      },
    };

    testScheduler.run(({ cold, expectObservable }) => {
      const action$ = cold('a', {
        a: tasks.status.play(true),
      });
      const state$ = new StateObservable(cold('a 1500ms b', values));

      const output$ = playHistoryEpic(action$, state$);

      const expectedValues = {
        a: {
          ...mockData[0],
        },
        b: {
          ...mockData[1],
        },
        c: {
          ...mockData[2],
        },
        d: tasks.status.play(false),
      };

      expectObservable(output$).toBe('a 999ms b', expectedValues);
    });
  });
});
