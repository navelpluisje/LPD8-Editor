import React from 'react';
import './main.css';
import {
  EditorControls,
  EditorSettings,
  Lpd8Case,
  Lpd8Pad,
  Lpd8Knob,
} from '../molecules';
import { Editor } from '../atoms';
import { useConfig } from '../../context';

export const Main: React.FC<any> = (props) => {
  const { pads, knobs } = useConfig();
  return(
    <main className="site-main">
      <EditorControls />
      <Editor>
        <Lpd8Case
          renderPads={() => Object.entries(pads).map(([id, pad]) => (<Lpd8Pad key={id} id={id} {...pad} />))}
          renderKnobs={() => Object.entries(knobs).map(([id, knob]) => (<Lpd8Knob key={id} id={id} {...knob} />))}
        />
      </Editor>
      <EditorSettings />
    </main>
  );
};