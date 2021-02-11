import React from 'react';
import { Button, Radio } from '@atoms';
import { useConfig, useMidi } from '@context';
import { getConfigurationForBank } from '@utils/sysexMessages';
import { toSysex } from '@utils/toSysex';
import styles from './editorControls.module.css';

export const EditorControls = () => {
  const { midiOutput } = useMidi();

  const loadConfiguration = () => {
    // @ts-ignore
    midiOutput && midiOutput.send(getConfigurationForBank(bank));
  }

  const sendConfiguration = () => {
    // @ts-ignore
    midiOutput && midiOutput.send(toSysex(bank, midiChannel, pads, knobs));
  }

  return (
    <section className={styles['editor-controls']}>
      <section className={styles['editor-actions']}>
        <Button onClick={loadConfiguration} disabled={Boolean(!midiOutput)}>Load from device</Button>
        <Button onClick={sendConfiguration} disabled={Boolean(!midiOutput)}>Send to device</Button>
        {/* <Button onClick={createTodo} disabled={false}>Save Config</Button> */}
      </section>
      <section className={styles['editor-banks']}>
        {/* <span>Banks</span>
        {['1', '2', '3', '4'].map(id => (
          <Radio key={id} name="ldp8-bank" value={id} label={id} checked={bank === id} onClick={() => setBank(id)} />
        ))} */}
      </section>
    </section>
  );
};