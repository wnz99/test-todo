const saveState = (state, key) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default saveState;
