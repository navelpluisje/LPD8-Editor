import { useContext } from "react";
import { ConfigContext } from "./context";

export const useConfig = () => {
  const { bank, pads, knobs, midiChannel, setBank, setPadValue, setKnobValue, setMidiChannel } = useContext(ConfigContext);

  return {
    bank,
    pads,
    knobs,
    midiChannel,
    setBank,
    setPadValue,
    setKnobValue,
    setMidiChannel,
  };
};
