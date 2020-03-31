import loadState from '../loadState';

describe('loadState function', () => {
  it('should load history from local storage', () => {
    loadState('test_key');
    expect(localStorage.getItem).toHaveBeenLastCalledWith('test_key');
  });
});
