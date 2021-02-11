import { LoadConfiguration } from './../types';

const counter = ['1', '2', '3', '4', '5', '6', '7', '8'];

export const isCorrectDevice = (hex: Uint8Array): boolean => {
  if (hex[1] !== 0x47) {
    console.error('Invalid manufacturer');
    return false;
  }

  if (!(hex[2] === 0x7f && hex[3] === 0x75)) {
    console.error('Invalid model');
    return false;
  }

  return true
}

export const getBank = (hex: Uint8Array) => {
  return hex[7];
};

export const getMidiChannel = (hex: Uint8Array) => {
  return hex[8];
};

export const getPadsInfo = (hex: Uint8Array) => {
  const startIndex = 9;
  let pads = {};
  counter.forEach((id: string, index: number) => {
    pads = {
      ...pads,
      [id]: {
        note: hex[startIndex + index * 4],
        cc: hex[startIndex + index * 4 + 1],
        pc: hex[startIndex + index * 4 + 2],
        type: hex[startIndex + index * 4 + 3]
      }
    }
  });
  return pads;
}

export const getKnobsInfo = (hex: Uint8Array) => {
  const startIndex = 40;
  let knobs = {};
  counter.forEach((id: string, index: number) => {
    knobs = {
      ...knobs,
      [id]: {
        cc: hex[startIndex + index * 3 + 1],
        min: hex[startIndex + index * 3 + 2],
        max: hex[startIndex + index * 3 + 3]
      }
    }
  });
  return knobs;
}

export const fromSysex = (hex: Uint8Array): LoadConfiguration | null => {
  if (!isCorrectDevice(hex)) { return null }
  return {
    bank: getBank(hex),
    midiChannel: getMidiChannel(hex),
    pads: getPadsInfo(hex),
    knobs: getKnobsInfo(hex),
  }
}