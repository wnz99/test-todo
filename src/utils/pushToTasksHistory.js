const pushToTasksHistory = (prevHistory, data) => {
  if (!data.type) {
    const historyEntry = {
      isSnapshot: true,
      data,
    };

    return [...prevHistory, historyEntry];
  }

  const historyEntry = {
    isSnapshot: false,
    data: { ...data, type: data.type.toString() },
  };

  return [...prevHistory, historyEntry];
};

export default pushToTasksHistory;
