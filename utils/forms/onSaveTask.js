const onSaveTask = (dispatch, actionFn) => data => {
  console.log(data);
  const { taskName, taskDescription } = data;
  const createdAt = new Date().valueOf();
  const payload = { name: taskName, description: taskDescription, createdAt };

  return dispatch(actionFn(payload));
};

export default onSaveTask;
