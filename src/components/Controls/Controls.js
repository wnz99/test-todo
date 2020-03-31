/* eslint-disable react/jsx-curly-newline */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SimpleButton from '../SimpleButton';
import { buttonGroupCss } from '../../const/commonStyles';
import ToolTip from '../ToolTip';
import actions from '../../store/actions';

const { tasks } = actions;

const Controls = ({ onAddItem }) => {
  const dispatch = useDispatch();
  const { isRecording, isPlaying } = useSelector(state => state.tasks.status);

  return (
    <>
      <ToolTip content="Record">
        <SimpleButton
          icon={isRecording ? 'stop-circle' : 'circle'}
          intent="danger"
          active={isRecording}
          onClick={() =>
            dispatch(tasks.status.set({ isRecording: !isRecording }))
          }
          className={buttonGroupCss.className}
          disabled={isPlaying}
        >
          {isRecording ? 'Recording..' : 'Record'}
        </SimpleButton>
      </ToolTip>

      <ToolTip content="Clear">
        <SimpleButton
          icon="delete"
          intent="danger"
          className={buttonGroupCss.className}
          onClick={() => dispatch(tasks.history.delete())}
          disabled={isPlaying || isRecording}
        >
          Clear
        </SimpleButton>
      </ToolTip>
      <ToolTip content="Play">
        <SimpleButton
          icon="play"
          intent="primary"
          active={isPlaying}
          onClick={() => dispatch(tasks.status.set({ isPlaying: !isPlaying }))}
          className={buttonGroupCss.className}
          disabled={isRecording}
        >
          {isPlaying ? 'Playing..' : 'Play'}
        </SimpleButton>
      </ToolTip>

      <ToolTip content="New">
        <SimpleButton
          icon="plus"
          intent="none"
          onClick={onAddItem}
          className={buttonGroupCss.className}
          disabled={isPlaying}
        >
          New
        </SimpleButton>
      </ToolTip>

      {buttonGroupCss.styles}
    </>
  );
};

Controls.propTypes = {
  onAddItem: PropTypes.func,
};

Controls.defaultProps = {
  onAddItem: () => {},
};

export default Controls;
