import { useContext } from "react";
import { ConfigurationProvider } from "src/types";
import { ConfigContext } from "./context";

export const useConfig = (): ConfigurationProvider => {
  const {
    bank,
    setPadValue,
    setKnobValue,
    setBank,
    setName,
    setDescription,
    setMidiChannel,
  } = useContext(ConfigContext);

  return {
    bank,
    setPadValue,
    setKnobValue,
    setBank,
    setName,
    setDescription,
    setMidiChannel,
  };
};
