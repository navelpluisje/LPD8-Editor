import { useContext } from "react";
import { MidiContext } from "./context";

export const useMidi = () => {
  const { midiInput, midiInputs, midiOutput, midiOutputs, setMidiInput, setMidiOutput } = useContext(MidiContext);

  return {
    midiInput,
    midiInputs,
    midiOutput,
    midiOutputs,
    setMidiInput,
    setMidiOutput,
  };
};
