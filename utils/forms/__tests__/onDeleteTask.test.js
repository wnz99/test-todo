import onDeleteTask from '../onDeleteTask';

const dispatch = jest.fn();

const actionFn = {
  delete: jest.fn(),
};

actionFn.delete.mockReturnValue('an action');

describe('onDeleteTask function', () => {
  it('should dispatch a delete action', () => {
    const payload = 1;

    onDeleteTask(dispatch, actionFn)(1);

    expect(actionFn.delete).toHaveBeenCalledWith(payload);
    expect(dispatch).toHaveBeenCalledWith('an action');
  });
});
