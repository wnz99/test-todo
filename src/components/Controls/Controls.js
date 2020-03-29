import React, { useState } from 'react';
import css from 'styled-jsx/css';

import SimpleButton from '../SimpleButton';

const ButtonStyle = css.resolve`
  div {
    margin: 5px;
  }
`;

const Controls = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <SimpleButton
        icon="circle"
        intent="danger"
        isActive={isRecording}
        onClick={() => setIsRecording(status => !status)}
        className={ButtonStyle.className}
      >
        Record
      </SimpleButton>
      <SimpleButton
        icon="play"
        intent="primary"
        isActive={isPlaying}
        onClick={() => setIsPlaying(status => !status)}
        className={ButtonStyle.className}
      >
        Play
      </SimpleButton>
      {ButtonStyle.styles}
    </>
  );
};

export default Controls;
