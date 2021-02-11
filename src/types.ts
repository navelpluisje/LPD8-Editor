type ItemIndex = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';

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
  _id: string;
  created: string;
  name: string;
  description: string;
  midiChannel: number;
  pads: Record<ItemIndex, Pad>;
  knobs: Record<ItemIndex, Knob>;
}

export interface ConfigurationProvider {
  bank: Bank,
  setBank: (bank: Bank) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPadValue: (id: string, key: string, value: number) => void;
  setKnobValue: (id: string, key: string, value: number) => void;
  setMidiChannel: (id: number) => void;
}

