import React from 'react';
import { Editor } from '../../atoms';
import logo from './midi.jpg';

export const NoMidi = () => (
  <Editor>
    <img src={logo} alt="logo midi" />
    <div>
      <div>&nbsp;No support for MIDI</div>
      <div>&nbsp;Try a browser which does</div>
      <div>&nbsp;One of the Chromium based</div>
      <div>&nbsp;browsers should do the trick</div>
    </div>
  </Editor>
)