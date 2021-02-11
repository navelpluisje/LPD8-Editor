import { createContext } from "react";
import { Bank, ConfigurationProvider } from '../../types';

export const initialState: Bank = {
  _id: '',
  created: new Date().toISOString(),
  name: 'initial',
  midiChannel: 0,
  description: 'Default configuration',
  pads: {
    '0': { note: 0, cc: 0, pc: 0, type: 0 },
    '1': { note: 0, cc: 0, pc: 0, type: 0 },
    '2': { note: 0, cc: 0, pc: 0, type: 0 },
    '3': { note: 0, cc: 0, pc: 0, type: 0 },
    '4': { note: 0, cc: 0, pc: 0, type: 0 },
    '5': { note: 0, cc: 0, pc: 0, type: 0 },
    '6': { note: 0, cc: 0, pc: 0, type: 0 },
    '7': { note: 0, cc: 0, pc: 0, type: 0 },
  },
  knobs: {
    '0': { cc: 0, min: 0, max: 127 },
    '1': { cc: 0, min: 0, max: 127 },
    '2': { cc: 0, min: 0, max: 127 },
    '3': { cc: 0, min: 0, max: 127 },
    '4': { cc: 0, min: 0, max: 127 },
    '5': { cc: 0, min: 0, max: 127 },
    '6': { cc: 0, min: 0, max: 127 },
    '7': { cc: 0, min: 0, max: 127 },
  },
};

const initialContext: ConfigurationProvider = {
  bank: initialState,
  setPadValue: (id: string, key: string, value: number) => {},
  setKnobValue: (id: string, key: string, value: number) => {},
  setBank: (bank: Bank) => {},
  setName: (name: string) => {},
  setDescription: (description: string) => {},
  setMidiChannel: (midiChannel: number) => {},
};

export const ConfigContext = createContext(initialContext)
