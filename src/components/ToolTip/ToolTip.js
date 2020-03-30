import PropTypes from 'prop-types';
import React from 'react';

const ToolTip = ({ children, content }) => {
  return (
    <>
      <div className="btn btn-primary tooltip">
        {children}
        <div className="bottom">
          {content}
          <i />
        </div>
      </div>

      <style jsx>
        {`
          .tooltip {
            display: inline-block;
            position: relative;
          }

          .tooltip .bottom {
            min-width: 100px;
            top: 52px;
            left: 50%;
            transform: translate(-50%, 0);
            padding: 10px 20px;
            color: #ffffff;
            background-color: #000000;
            font-weight: normal;
            font-size: 13px;
            border-radius: 2px;
            position: absolute;
            z-index: 99999999;
            box-sizing: border-box;
            border: 1px solid #000000;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.8s;
            text-align: center;
          }

          .tooltip:hover .bottom {
            visibility: visible;
            opacity: 1;
          }

          .tooltip .bottom i {
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -12px;
            width: 24px;
            height: 12px;
            overflow: hidden;
          }

          .tooltip .bottom i::after {
            content: '';
            position: absolute;
            width: 12px;
            height: 12px;
            left: 50%;
            transform: translate(-50%, 50%) rotate(45deg);
            background-color: #000000;
            border: 1px solid #000000;
            box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
          }
          @media (--desktop) {
            .tooltip .bottom {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

export default ToolTip;
