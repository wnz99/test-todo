import tasks from '../tasksActions';

describe('tasks actions', () => {
  it('should create an action to add a task', () => {
    const newAction = {
      name: 'test_task',
      description: 'a new task',
      createdAt: 12345,
    };

    const expecteAction = {
      type: 'CREATE',
      payload: newAction,
    };

    const action = tasks.create(newAction);

    expect(action).toEqual(expecteAction);
  });
  it('should create an action to update a task', () => {
    const newAction = {
      id: 1,
      name: 'test_task',
      description: 'a new task',
      updatedAt: 12345,
    };

    const expecteAction = {
      type: 'UPDATE',
      payload: newAction,
    };

    const action = tasks.update(newAction);

    expect(action).toEqual(expecteAction);
  });
  it('should create an action to delete a task', () => {
    const expecteAction = {
      type: 'DELETE',
      payload: 1,
    };

    const action = tasks.delete(1);

    expect(action).toEqual(expecteAction);
  });
});
