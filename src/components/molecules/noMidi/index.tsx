import React from 'react';
import { Editor } from '@atoms';
import Image from 'next/image'

export const NoMidi = () => (
  <Editor>
    <Image src="midi.jpg" alt="logo midi" width={100} height={100} />
    <div>
      <div>&nbsp;No support for MIDI</div>
      <div>&nbsp;Try a browser which does</div>
      <div>&nbsp;One of the Chromium based</div>
      <div>&nbsp;browsers should do the trick</div>
    </div>
  </Editor>
)