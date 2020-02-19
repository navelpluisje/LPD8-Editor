import { Sysex } from '../constants';

export const getConfigurationForBank = (bank: string) => {
  return new Uint8Array([
    Sysex.Start,
    Sysex.Manufacturer,
    ...Sysex.Model,
    ...Sysex.Actions.GetProgram,
    parseInt(bank, 16),
    Sysex.End,
  ]);
};

export const sendConfigurationForBank = (bank: string, midiChannel: number, data: number[]) => {
  return new Uint8Array([
    Sysex.Start,
    Sysex.Manufacturer,
    ...Sysex.Model,
    ...Sysex.Actions.SendProgram,
    parseInt(bank, 16),
    midiChannel,
    ...data,
    Sysex.End,
  ]);
};

export const getActiveBank = () => {
  return new Uint8Array([
    Sysex.Start,
    Sysex.Manufacturer,
    ...Sysex.Model,
    ...Sysex.Actions.GetActiveBank,
    Sysex.End,
  ]);
};
