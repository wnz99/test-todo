import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { Intent, Icon } from '../../const/ui';

const buttonIntent = {
  [Intent.PRIMARY]: 'btn-primary',
  [Intent.DANGER]: 'btn-danger',
};

const SimpleButton = ({
  icon,
  intent,
  children,
  className,
  onClick,
  isActive,
}) => {
  const IconImg = Icon[icon];

  return (
    <>
      <div
        role="button"
        onClick={onClick}
        onKeyDown={onClick}
        tabIndex={0}
        className={classNames('btn', buttonIntent[intent], className)}
      >
        <span className="btn-text">{children}</span>
        <span className="btn-img">{icon && <IconImg />}</span>
      </div>
      <style jsx>
        {`
          .btn {
            line-height: 1.5715;
            position: relative;
            display: inline-block;
            font-weight: 700;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            border: 1px solid transparent;
            -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
            cursor: pointer;
            -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            height: 32px;
            padding: 4px 15px;
            font-size: 14px;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.65);
            background-color: #fff;
            border-color: #d9d9d9;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .btn:focus {
            outline: 0;
          }
          .btn:active {
            outline: 0;
          }

          .btn-primary {
            border-color: #1890ff;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
            -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            opacity: 0.8;
          }
          .btn-primary:hover {
            opacity: 1;
          }
          .btn-danger {
            border-color: #ff7875;
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
            -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
            opacity: 0.8;
          }
          .btn-danger:hover {
            opacity: 1;
          }
          .btn-img {
            display: flex;
            align-items: center;
          }
          .btn-text {
            display: none;
          }
          @media (--desktop) {
            .btn {
              min-width: 100px;
            }
            .btn-text {
              display: inline;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .btn-primary {
            color: ${isActive ? '#fff' : '#40a9ff'};
            background-color: ${isActive ? '#40a9ff' : '#fff'};
          }
          .btn-danger {
            color: ${isActive ? '#fff' : '#ff4d4f'};
            background-color: ${isActive ? '#ff4d4f' : '#fff'};
          }
        `}
      </style>
    </>
  );
};

SimpleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  intent: PropTypes.oneOf(Object.values(Intent)),
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

SimpleButton.defaultProps = {
  intent: Intent.NONE,
  className: '',
  onClick: () => {},
  isActive: false,
};

export default SimpleButton;