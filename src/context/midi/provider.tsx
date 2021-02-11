import React, { useState, useReducer, useEffect } from 'react';
import { initialState, MidiContext } from './context';
import { EventBus } from '@utils/eventBus';
import { getActiveBank } from '@utils/sysexMessages';

export const MidiContextProvider: React.FC<any> = ({ children }) => {
  const [midiInputs, setMidiInputs] = useState<WebMidi.MIDIInput[]>([]);
  const [midiOutputs, setMidiOutputs] = useState<WebMidi.MIDIOutput[]>([]);
  const [midiInput, setInput] = useState<WebMidi.MIDIInput>();
  const [midiOutput, setOutput] = useState<WebMidi.MIDIOutput>();

  const handleMidiMessage = (e: WebMidi.MIDIMessageEvent) => {
    switch(e.data[4]) {
      case 0x64:
        EventBus.publish('change-bank', e.data[7].toString());
        break;

      case 0x63:
        if (e.data[6] === 0x3a) {
          EventBus.publish('received-config', e.data);
        }
        break;
    }
  }

  const onMIDISuccess = (midiAccess: WebMidi.MIDIAccess) => {
    if (midiAccess.inputs) {
      setMidiInputs(Array
        .from(midiAccess.inputs)
        .map((input) => input[1])
      );
      setMidiOutputs(Array
        .from(midiAccess.outputs)
        .map((input) => input[1])
      );
    } else {
      console.warn('Whaaaaat, no MIDI inputs available');
    }
    midiAccess.onstatechange = onConnectionChange;
  }

  const onConnectionChange = (connectionEvent: WebMidi.MIDIConnectionEvent) => {
    const midiAccess = connectionEvent.target as WebMidi.MIDIAccess;
    onMIDISuccess(midiAccess);
  }

  useEffect(() => {
    navigator.requestMIDIAccess({ sysex: true }).then(onMIDISuccess);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    dispatch({
      type: 'setMidi',
    })
  }, [midiInput, midiOutput, midiOutputs, midiInputs])

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'setMidiInput':
        const input = midiInputs.find((input) => input.id === action.payload);
        input && (input.onmidimessage = handleMidiMessage);
        setInput(input);
        midiOutput && midiOutput.send(getActiveBank());
        return {
          ...state,
          midiInput: input,
        }

      case 'setMidiOutput':
        const output = midiOutputs.find((output) => output.id === action.payload);
        output && output.send(getActiveBank());
        setOutput(output);
        return {
          ...state,
          midiOutput: output,
        }

      case 'setMidi':
        return {
          ...state,
          midiInput,
          midiOutput,
          midiInputs,
          midiOutputs,
        }

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setMidiInput = (id: string) =>
    dispatch({
      type: 'setMidiInput',
      payload: id
    });

  const setMidiOutput = (id: string) =>
    dispatch({
      type: 'setMidiOutput',
      payload: id
    });

  return (
    <MidiContext.Provider value={{ ...state, setMidiInput, setMidiOutput }}>
      {children}
    </MidiContext.Provider>
  );
};
