import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import SimpleButton from '../SimpleButton';

const ToDoItemView = ({ item, onEdit, onDelete }) => {
  const { id, name, description, createdAt } = item;
  return (
    <>
      <article className="item-container">
        <header className="item-title">
          <h4>{`#${id} ${name}`}</h4>
          <div className="item-controls">
            <SimpleButton
              minimal
              icon="delete"
              intent="danger"
              onClick={() => onDelete(id)}
            >
              Delete
            </SimpleButton>
            <SimpleButton minimal icon="edit" intent="primary" onClick={onEdit}>
              Edit
            </SimpleButton>
          </div>
        </header>
        <div className="item-date">
          <time dateTime={moment(createdAt).toISOString()}>
            {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </time>
        </div>
        <section>
          <div className="item-description">
            <p>{description}</p>
          </div>
        </section>
      </article>
      <style jsx>
        {`
          .item-container {
            border: 1px solid #f0f0f0;
          }
          .item-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: -1px;
            padding-left: 24px;
            padding-right: 24px;
            color: rgba(0, 0, 0, 0.85);
            font-weight: 500;
            font-size: 16px;
            background: 0 0;
            border-bottom: 1px solid #f0f0f0;
            border-radius: 2px 2px 0 0;
          }
          .item-date {
            padding-top: 12px;
            padding-left: 24px;
          }
          .item-description {
            padding: 24px;
          }
          .item-controls {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

ToDoItemView.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

ToDoItemView.defaultProps = {
  onEdit: () => {},
  onDelete: () => {},
};

export default React.memo(ToDoItemView);
