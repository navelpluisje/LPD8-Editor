export interface Pad {
  note: number;
  cc: number;
  pc: number;
  type: number;
}

export interface Knob {
  cc: number;
  min: number;
  max: number;
}

export interface Bank {
  description: string,
  bank: string;
  midiChannel: number;
  pads: Record<string, Pad>;
  knobs: Record<string, Knob>;
}

export interface Configuration {
  activeBank: () => Bank & { name: string };
  getBanks: () => Array<Bank & { name: string }>;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPadValue: (id: string, key: string, value: number) => void;
  setKnobValue: (id: string, key: string, value: number) => void;
  setBank: (id: string) => void;
  setMidiChannel: (id: number) => void;
  setConfiguration: (name: string, bank: Bank) => void;
  setConfigurations: (banks: Record<string, Bank>) => void;
}

export interface ConfigState {
  banks: Record<string, Bank>,
}

export interface LoadConfiguration {
  midiChannel: number;
  bank: number,
  pads: Record<string, Pad>;
  knobs: Record<string, Knob>;
}

