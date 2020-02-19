import { createContext } from "react";

export const initialState = {
  midiInput: null,
  midiOutput: null,
  midiInputs: [],
  midiOutputs: [],
  midiChannel: 0,
  setMidiInput: () => {},
  setMidiOutput: () => {},
};

export const MidiContext = createContext(initialState);
