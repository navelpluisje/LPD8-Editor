import React from 'react';
import './editorSettings.css';
import { useMidi, useConfig } from '../../../context';
import { Select } from '../../atoms';

const midiChannels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

export const EditorSettings = () => {
  const { midiInputs, midiOutputs, setMidiInput, setMidiOutput } = useMidi();
  const { setMidiChannel, midiChannel } = useConfig();

  return (
    <section className="editor-settings">
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
