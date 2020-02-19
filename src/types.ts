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

export interface Configuration {
  bank: string;
  midiChannel: number;
  pads: Record<string, Pad>;
  knobs: Record<string, Knob>;
  setPadValue: (id: string, key: string, value: number) => void;
  setKnobValue: (id: string, key: string, value: number) => void;
  setBank: (id: string) => void;
  setMidiChannel: (id: number) => void;
}

export interface LoadConfiguration {
  midiChannel: number;
  bank: number,
  pads: Record<string, Pad>;
  knobs: Record<string, Knob>;
}

