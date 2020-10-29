import React from 'react';
import './editor.css';
import {
  EditorControls,
  Lpd8Case,
  Lpd8Pad,
  Lpd8Knob,
} from '../../components/molecules';
import { EditorDrawer } from '../../components/organisms';
import { Editor } from '../../components/atoms';
import { useConfig } from '../../context';

export const EditorPage: React.FC<any> = (props) => {
  const { activeBank } = useConfig();
  const { name, pads, knobs } = activeBank();

  return(
    <main className="page-editor">
      <EditorControls />
      <Editor>
        <Lpd8Case
          title={name}
          renderPads={() => Object.entries(pads).map(([id, pad]) => (<Lpd8Pad key={id} id={id} {...pad} />))}
          renderKnobs={() => Object.entries(knobs).map(([id, knob]) => (<Lpd8Knob key={id} id={id} {...knob} />))}
        />
      </Editor>
      <EditorDrawer />
    </main>
  );
};