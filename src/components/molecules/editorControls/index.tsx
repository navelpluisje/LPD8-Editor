import React from 'react';
import { Button, Radio } from '../../atoms';
import { useConfig, useMidi } from '../../../context';
import { getConfigurationForBank } from '../../../helpers/sysexMessages';
import { toSysex } from '../../../helpers/toSysex';
import './editorControls.css';

export const EditorControls = () => {
  const { pads, knobs, bank, midiChannel, setBank } = useConfig();
  const { midiOutput } = useMidi();

  const loadConfiguration = () => {
    // @ts-ignore
    midiOutput && midiOutput.send(getConfigurationForBank(bank));
  }

  const sendConfiguration = () => {
    // @ts-ignore
    midiOutput && midiOutput.send(toSysex(bank, midiChannel, pads, knobs));
  }

  const createTodo = () => {
    return fetch('/.netlify/functions/config-create', {
      body: JSON.stringify('test: true'),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  return (
    <section className="editor-controls">
      <section className="editor-actions">
        <Button onClick={loadConfiguration} disabled={Boolean(!midiOutput)}>Load Config</Button>
        <Button onClick={sendConfiguration} disabled={Boolean(!midiOutput)}>Send Config</Button>
        <Button onClick={createTodo} disabled={false}>Save Config</Button>
      </section>
      <section className="editor-banks">
        <span>Banks</span>
        {['1', '2', '3', '4'].map(id => (
          <Radio key={id} name="ldp8-bank" value={id} label={id} checked={bank === id} onClick={() => setBank(id)} />
        ))}
      </section>
    </section>
  );
};