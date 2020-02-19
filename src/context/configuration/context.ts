import { createContext } from "react";
import { Configuration } from '../../types';

export const initialState: Configuration = {
  bank: '1',
  midiChannel: 0,
  pads: {
    '1': { note: 0, cc: 0, pc: 0, type: 0 },
    '2': { note: 0, cc: 0, pc: 0, type: 0 },
    '3': { note: 0, cc: 0, pc: 0, type: 0 },
    '4': { note: 0, cc: 0, pc: 0, type: 0 },
    '5': { note: 0, cc: 0, pc: 0, type: 0 },
    '6': { note: 0, cc: 0, pc: 0, type: 0 },
    '7': { note: 0, cc: 0, pc: 0, type: 0 },
    '8': { note: 0, cc: 0, pc: 0, type: 0 },
  },
  knobs: {
    '1': { cc: 0, min: 0, max: 127 },
    '2': { cc: 0, min: 0, max: 127 },
    '3': { cc: 0, min: 0, max: 127 },
    '4': { cc: 0, min: 0, max: 127 },
    '5': { cc: 0, min: 0, max: 127 },
    '6': { cc: 0, min: 0, max: 127 },
    '7': { cc: 0, min: 0, max: 127 },
    '8': { cc: 0, min: 0, max: 127 },
  },
  setPadValue: (id: string, key: string, value: number) => {},
  setKnobValue: (id: string, key: string, value: number) => {},
  setBank: (id: string) => {},
  setMidiChannel: (id: number) => {},
};

export const ConfigContext = createContext(initialState);
