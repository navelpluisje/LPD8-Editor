import { createContext } from "react";
import { ConfigState, Bank } from '../../types';

export const initialState: ConfigState = {
  banks: {
    initial: {
      bank: '1',
      midiChannel: 0,
      description: 'Default configuration',
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
    },
  },
};

const initialContext = {
  activeBank: () => ({ ...initialState.banks.initial, name: 'initial' }),
  setActiveBank: (name: string) => {},
  getBanks: () => ([{ ...initialState.banks.initial, name: 'initial' }]),
  setPadValue: (id: string, key: string, value: number) => {},
  setKnobValue: (id: string, key: string, value: number) => {},
  setBank: (bank: string) => {},
  setName: (name: string) => {},
  setDescription: (description: string) => {},
  setMidiChannel: (midiChannel: number) => {},
  setConfiguration: (name: string, bank: Bank) => {},
  setConfigurations: (banks: Record<string, Bank>) => {},
};

export const ConfigContext = createContext(initialContext)
