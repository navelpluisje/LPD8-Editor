import React from 'react';
import styles from './midiSettings.module.css';
import { useConfig, useMidi } from '@context';
import { Select } from '@atoms';
import { midiChannels } from '@constants';

export const MidiSettings = () => {
  const { activeBank, setMidiChannel } = useConfig();
  const { midiInputs, midiOutputs, setMidiInput, setMidiOutput } = useMidi();
  const midiChannel = activeBank();

  return (
    <section className={styles['midi-settings']}>
      <h2>Midi</h2>
      <Select
        id="midi-input"
        label="Midi Input"
        onChange={setMidiInput}
      >
        {midiInputs.map((input: WebMidi.MIDIInput) => (
          <option value={input.id} key={input.id}>{input.name}</option>
        ))}
      </Select>
      <Select
        id="midi-output"
        label="Midi Output"
        onChange={setMidiOutput}
      >
        {midiOutputs.map((output: WebMidi.MIDIOutput) => (
          <option value={output.id} key={output.id}>{output.name}</option>
        ))}
      </Select>
      <Select
        value={midiChannel.toString()}
        id="midi-channel"
        label="Midi channel"
        onChange={(channel: string) => setMidiChannel(parseInt(channel, 10))}
      >
        {midiChannels.map((channel: string, index: number) => (
          <option value={index} key={channel}>{channel}</option>
        ))}
      </Select>
    </section>
  );
};
