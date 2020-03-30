import PropTypes from 'prop-types';
import React, { useState } from 'react';

import SimpleButton from '../SimpleButton';
import { ButtonGroup } from '../../const/commonStyles';
import ToolTip from '../ToolTip';

const Controls = ({ onAddItem }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <ToolTip content="Record">
        <SimpleButton
          icon="circle"
          intent="danger"
          active={isRecording}
          onClick={() => setIsRecording(status => !status)}
          className={ButtonGroup.className}
        >
          Record
        </SimpleButton>
      </ToolTip>

      <ToolTip content="Play">
        <SimpleButton
          icon="play"
          intent="primary"
          active={isPlaying}
          onClick={() => setIsPlaying(status => !status)}
          className={ButtonGroup.className}
        >
          Play
        </SimpleButton>
      </ToolTip>

      <ToolTip content="New">
        <SimpleButton
          icon="plus"
          intent="none"
          onClick={onAddItem}
          className={ButtonGroup.className}
        >
          New
        </SimpleButton>
      </ToolTip>

      {ButtonGroup.styles}
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
