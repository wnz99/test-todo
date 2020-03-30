const onSaveTask = (dispatch, actionFn) => data => {
  const { taskName, taskDescription, taskId } = data;

  const { create, update } = actionFn;

  const now = new Date().valueOf();

  if (taskId) {
    const payload = {
      id: taskId,
      name: taskName,
      description: taskDescription,
      updatedAt: now,
    };

    return dispatch(update(payload));
  }

  const payload = {
    name: taskName,
    description: taskDescription,
    createdAt: now,
  };

  return dispatch(create(payload));
};

export default onSaveTask;
