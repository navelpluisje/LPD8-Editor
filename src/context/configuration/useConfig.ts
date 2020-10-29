import { useContext } from "react";
import { ConfigContext } from "./context";

export const useConfig = () => {
  const {
    activeBank,
    setActiveBank,
    getBanks,
    setPadValue,
    setKnobValue,
    setBank,
    setName,
    setDescription,
    setMidiChannel,
    setConfiguration,
    setConfigurations,
  } = useContext(ConfigContext);

  return {
    activeBank,
    setActiveBank,
    getBanks,
    setPadValue,
    setKnobValue,
    setBank,
    setName,
    setDescription,
    setMidiChannel,
    setConfiguration,
    setConfigurations,
  };
};
