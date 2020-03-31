import React from 'react';
import { useSelector } from 'react-redux';
import isEqual from 'lodash/isEqual';

import ToDoItem from '../ToDoItem';

const renderItems = items => {
  return Object.keys(items)
    .reverse()
    .map(entry => (
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
    return state.tasks.list;
  }, isEqual);

  return (
    <>
      <ul>{renderItems(items)}</ul>
      <style jsx>
        {`
          ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
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
