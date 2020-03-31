const pushToHistory = (prevHistory, data) => {
  if (!data.type) {
    const { list, last } = data;
    const historyEntry = {
      isSnapshot: true,
      data: {
        list,
        last,
      },
    };

    return [...prevHistory, historyEntry];
  }

  const historyEntry = {
    isSnapshot: false,
    data: { ...data, type: data.type.toString() },
  };

  return [...prevHistory, historyEntry];
};

export default pushToHistory;
