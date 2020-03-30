import MockDate from 'mockdate';

import onSaveTask from '../onSaveTask';

const dispatch = jest.fn();

const actionFn = {
  create: jest.fn(),
  update: jest.fn(),
};

actionFn.create.mockReturnValue('an action');

actionFn.update.mockReturnValue('an update action');

describe('onSaveTask function', () => {
  it('should dispatch a create action', () => {
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

    expect(actionFn.create).toHaveBeenCalledWith(payload);
    expect(dispatch).toHaveBeenCalledWith('an action');
    MockDate.reset();
  });

  it('should dispatch an update action', () => {
    MockDate.set(1434319925275);

    const data = {
      taskId: 1,
      taskName: 'name',
      taskDescription: 'description',
    };

    const payload = {
      id: 1,
      name: data.taskName,
      description: data.taskDescription,
      updatedAt: new Date(1434319925275).valueOf(),
    };

    onSaveTask(dispatch, actionFn)(data);

    expect(actionFn.update).toHaveBeenCalledWith(payload);
    expect(dispatch).toHaveBeenCalledWith('an update action');
    MockDate.reset();
  });
});
