import MockDate from 'mockdate';

import onSaveTask from '../onSaveTask';

const dispatch = jest.fn();

const actionFn = jest.fn();

actionFn.mockReturnValue('an action');

describe('onSaveTask function', () => {
  it('should dispatch an action', () => {
    MockDate.set(1434319925275);

    const data = {
      taskName: 'name',
      taskDescription: 'description',
    };

    const payload = {
      name: data.taskName,
      description: data.taskDescription,
      createdAt: new Date(1434319925275).valueOf(),
    };

    onSaveTask(dispatch, actionFn)(data);

    expect(actionFn).toHaveBeenCalledWith(payload);
    expect(dispatch).toHaveBeenCalledWith('an action');
    MockDate.reset();
  });
});
