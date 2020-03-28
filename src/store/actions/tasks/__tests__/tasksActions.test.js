import tasks from '../tasksActions';

describe('tasks actions', () => {
  it('should create an action to add a task', () => {
    const newAction = {
      name: 'test_task',
      description: 'a new task',
      createdAt: 12345,
    };

    const expecteAction = {
      type: 'ADD',
      payload: newAction,
    };

    const action = tasks.add(newAction);

    expect(action).toEqual(expecteAction);
  });
});
