import saveState from '../saveState';

describe('saveState function', () => {
  it('should save history tp local storage', () => {
    const mockData = [1, 2, 3];

    saveState(mockData, 'test_key');
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'test_key',
      JSON.stringify(mockData)
    );
  });
});
