import React from 'react';
import { useSelector } from 'react-redux';

import ToDoItem from '../ToDoItem';

const renderItems = items => {
  return Object.keys(items).map(entry => (
    <React.Fragment key={`item-${entry}`}>
      <li>
        <ToDoItem item={items[entry]} />
      </li>
      <style jsx>
        {`
          li {
            padding-bottom: 24px;
          }
        `}
      </style>
    </React.Fragment>
  ));
};

const ToDoList = () => {
  const items = useSelector(state => {
    return state.tasks;
  });
  const { list } = items;
  return (
    <>
      <ul>{renderItems(list)}</ul>
      <style jsx>
        {`
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            padding-bottom: 24px;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(ToDoList);
