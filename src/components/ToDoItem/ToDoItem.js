import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import ToDoItemView from '../ToDoItemView';
import ToDoItemAdd from '../ToDoItemAdd';
import actions from '../../store/actions';
import { onSaveTask, onDeleteTask } from '../../utils/forms';

const { tasks } = actions;

const ToDoItem = ({ item }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);

  const onEdit = useCallback(() => setIsEdit(true), []);

  const onDelete = useCallback(onDeleteTask(dispatch, tasks), [dispatch]);

  return (
    <>
      <div className={isEdit ? 'fadein' : 'fadeout'}>
        {isEdit && (
          <ToDoItemAdd
            item={item}
            onCancel={() => setIsEdit(false)}
            onSubmit={data => onSaveTask(dispatch, tasks)(data)}
          />
        )}
      </div>
      <div>
        {!isEdit && (
          <ToDoItemView item={item} onEdit={onEdit} onDelete={onDelete} />
        )}
      </div>
      <style jsx>
        {`
          .fadein,
          .fadeout {
            opacity: 0;
            -moz-transition: opacity 0.4s ease-in-out;
            -o-transition: opacity 0.4s ease-in-out;
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
          }
          .fadein {
            opacity: 1;
            padding-bottom: 24px;
          }
        `}
      </style>
    </>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default ToDoItem;
