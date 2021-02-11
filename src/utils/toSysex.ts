import { sendConfigurationForBank } from './sysexMessages';

export const getPadsInfo = (pads: any): number[] => {
  let result: number[] = [];
  Object.values(pads).forEach((pad: any) => {
    result.push(pad.note);
    result.push(pad.cc);
    result.push(pad.pc);
    result.push(pad.type);
  });

  return result;
}

export const getKnobsInfo = (pads: any): number[] => {
  let result: number[] = [];
  Object.values(pads).forEach((pad: any) => {
    result.push(pad.cc);
    result.push(pad.min);
    result.push(pad.max);
  });

  return result;
}

export const toSysex = (bank: any, midiChannel: any, pads: any, knobs: any): Uint8Array => {
  const padsData = getPadsInfo(pads);
  const knobsData = getKnobsInfo(knobs);

  return sendConfigurationForBank(bank, midiChannel, [...padsData, ...knobsData])
}