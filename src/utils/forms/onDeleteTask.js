const onDeleteTask = (dispatch, actionFn) => id =>
  dispatch(actionFn.delete(id));

export default onDeleteTask;
