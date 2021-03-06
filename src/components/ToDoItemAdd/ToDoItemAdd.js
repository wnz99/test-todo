/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

import SimpleButton from '../SimpleButton';
import { buttonGroupCss } from '../../const/commonStyles';

const renderErrors = errors =>
  Object.values(errors).map(error => (
    <div key={error.message}>{error.message}</div>
  ));

const ToDoItemAdd = ({ item, onCancel, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const { name, description, id } = item;

  return (
    <>
      <div className="item-add-container">
        <header>
          <h3>Enter item details</h3>
        </header>
        <form>
          <div className="item-add-form-entry">
            <label className="item-add-form-label" htmlFor="taskName">
              Name
            </label>
            <input
              className="item-add-from-input"
              type="text"
              id="taskName"
              name="taskName"
              ref={register({ required: 'Name cannot be empty' })}
              defaultValue={name}
            />
          </div>
          <div className="item-add-form-entry">
            <label className="item-add-form-label" htmlFor="taskDescription">
              Description
            </label>
            <textarea
              className="item-add-from-input"
              id="taskDescription"
              name="taskDescription"
              ref={register({ required: 'Description cannot be empty' })}
              defaultValue={description}
            />
          </div>
          <input
            type="hidden"
            className="item-add-from-input"
            name="taskId"
            value={id}
            ref={register}
          />
          <div className="item-add-form-controls">
            <SimpleButton
              className={buttonGroupCss.className}
              responsive={false}
              onClick={onCancel}
            >
              Cancel
            </SimpleButton>
            <SimpleButton
              className={buttonGroupCss.className}
              responsive={false}
              onClick={handleSubmit(data => {
                onSubmit(data);
                onCancel();
              })}
            >
              Save
            </SimpleButton>
          </div>
          <div className="item-add-form-errors">
            {Object.keys(errors).length !== 0 && renderErrors(errors)}
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .h3 {
            opacity: 0.5;
          }
          textarea {
            height: 150px;
          }
          .item-add-container {
            position: relative;
            border: 1px solid #f0f0f0;
            border-radius: 2px;
            -webkit-transition: all 0.2s;
            transition: all 0.2s;
            padding: 15px;
          }
          .item-add-form-errors {
            color: #ff4d4f;
          }
          .item-add-form {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            line-height: 1.5715;
            list-style: none;
          }
          .item-add-form-entry {
            display: flex;
            flex-direction: column;
          }
          .item-add-form-controls {
            display: flex;
            justify-content: flex-end;
            padding-top: 15px;
          }
          .item-add-form-label {
            padding-top: 5px;
            padding-bottom: 5px;
          }
          .item-add-from-input {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-variant: tabular-nums;
            list-style: none;
            -webkit-font-feature-settings: 'tnum';
            font-feature-settings: 'tnum';
            position: relative;
            display: inline-block;
            width: 100%;
            min-width: 0;
            padding: 4px 11px;
            color: rgba(0, 0, 0, 0.65);
            font-size: 14px;
            line-height: 1.5715;
            background-color: #fff;
            background-image: none;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
          }
        `}
      </style>
    </>
  );
};

ToDoItemAdd.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ToDoItemAdd.defaultProps = {
  item: {},
};

export default ToDoItemAdd;
