/* eslint-disable react/jsx-curly-newline */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SimpleButton from '../SimpleButton';
import { buttonGroupCss } from '../../const/commonStyles';
import actions from '../../store/actions';

const { tasks } = actions;

const Controls = ({ onAddItem }) => {
  const dispatch = useDispatch();
  const { isRecording, isPlaying } = useSelector(state => state.tasks.status);

  return (
    <>
      <SimpleButton
        icon={isRecording ? 'stop-circle' : 'circle'}
        intent="danger"
        active={isRecording}
        onClick={() => dispatch(tasks.status.record(!isRecording))}
        className={buttonGroupCss.className}
        disabled={isPlaying}
      >
        {isRecording ? 'Stop' : 'Record'}
      </SimpleButton>

      <SimpleButton
        icon="delete"
        intent="danger"
        className={buttonGroupCss.className}
        onClick={() => dispatch(tasks.history.delete())}
        disabled={isPlaying || isRecording}
      >
        Clear
      </SimpleButton>

      <SimpleButton
        icon="play"
        intent="primary"
        active={isPlaying}
        onClick={() => dispatch(tasks.status.play(!isPlaying))}
        className={buttonGroupCss.className}
        disabled={isRecording}
      >
        {isPlaying ? 'Playing..' : 'Play'}
      </SimpleButton>

      <SimpleButton
        icon="plus"
        intent="none"
        onClick={onAddItem}
        className={buttonGroupCss.className}
        disabled={isPlaying}
      >
        New
      </SimpleButton>

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
