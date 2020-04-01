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
  active,
  responsive,
  minimal,
  disabled,
}) => {
  const IconImg = Icon[icon];
  console.log('button');
  return (
    <>
      <div
        role="button"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onClick();
          }
        }}
        tabIndex={0}
        className={classNames(
          'btn',
          buttonIntent[intent],
          minimal ? 'minimal' : '',
          disabled ? 'disabled' : '',
          className
        )}
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
            padding: 2px 10px;
            font-size: 14px;
            border-radius: 2px;
            color: rgba(0, 0, 0, 0.65);
            background-color: #fff;
            border-color: #d9d9d9;
            display: flex;
            align-items: center;
            justify-content: space-between;
            opacity: 0.8;
          }
          .btn:focus {
            outline: 0;
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.5);
          }
          .btn:active {
            outline: 0;
          }
          .btn:hover {
            opacity: 1;
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
          .btn-primary:focus {
            outline: 0;
            box-shadow: 0 2px 0 rgba(24, 144, 255, 0.5);
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
          .btn-danger:focus {
            outline: 0;
            box-shadow: 0 2px 0 rgba(255, 120, 117, 0.5);
          }
          .btn-img {
            display: flex;
            align-items: center;
          }
          .minimal {
            border: none;
            box-shadow: none;
          }
        `}
      </style>
      <style jsx>
        {`
          .btn {
            min-width: ${responsive ? '0px' : '100px'};
          }
          .btn-text {
            display: ${responsive ? 'none' : 'inline'};
          }
          .btn-primary {
            color: ${active ? '#fff' : '#40a9ff'};
            background-color: ${active ? '#40a9ff' : '#fff'};
          }
          .btn-danger {
            color: ${active ? '#fff' : '#ff4d4f'};
            background-color: ${active ? '#ff4d4f' : '#fff'};
          }
          @media (--desktop) {
            .btn {
              min-width: 100px;
            }
            .btn-text {
              display: inline;
              width: 100%;
            }
            .btn-img {
              display: none;
            }
          }
        `}
      </style>
      <style jsx>
        {`
          .disabled {
            pointer-events: none;
            color: rgba(0, 0, 0, 0.25);
            background-color: #f5f5f5;
            border-color: #d9d9d9;
            text-shadow: none;
            -webkit-box-shadow: none;
            box-shadow: none;
          }
        `}
      </style>
    </>
  );
};

SimpleButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  intent: PropTypes.oneOf(Object.values(Intent)),
  minimal: PropTypes.bool,
  onClick: PropTypes.func,
  responsive: PropTypes.bool,
  disabled: PropTypes.bool,
};

SimpleButton.defaultProps = {
  active: false,
  className: '',
  icon: null,
  intent: Intent.NONE,
  minimal: false,
  onClick: () => {},
  responsive: true,
  disabled: false,
};

export default SimpleButton;
