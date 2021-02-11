import {
  isCorrectDevice,
  getBank,
  getPadsInfo,
  getKnobsInfo,
  fromSysex,
} from './fromSysex';

const result = new Uint8Array([
  0xF0, 0x47, 0x7F, 0x75, 0x63, 0x00, 0x3A, 0x01, 0x09,
  0x24, 0x00, 0x34, 0x00, 0x25, 0x01, 0x3E, 0x00, 0x26, 0x02, 0x48, 0x00, 0x27, 0x03, 0x52, 0x00,
  0x28, 0x04, 0x0C, 0x00, 0x29, 0x05, 0x16, 0x00, 0x2A, 0x06, 0x20, 0x00, 0x2B, 0x07, 0x2A, 0x00,
  0x0B, 0x00, 0x64, 0x15, 0x00, 0x64, 0x1F, 0x00, 0x64, 0x29, 0x00, 0x64,
  0x33, 0x00, 0x64, 0x3D, 0x00, 0x64, 0x47, 0x00, 0x64, 0x51, 0x00, 0x64,
  0xF7
]);

describe('The sysex functions', () => {
  test('the device is correct', () => {
    expect(isCorrectDevice(result)).toBe(true);
  });

  test('the device fails on manufacturer', () => {
    expect(isCorrectDevice(new Uint8Array([0xF0, 0x46, 0x7F, 0x75, 0x63]))).toBe(false);
  });

  test('the device fails on device', () => {
    expect(isCorrectDevice(new Uint8Array([0xF0, 0x47, 0x7E, 0x75, 0x63]))).toBe(false);
  });

  test('the bank is parsed', () => {
    expect(getBank(result)).toBe(1);
  });

  test('the pads are parsed', () => {
    const pads: any = getPadsInfo(result);
    expect(pads['1'].note).toBe(36);
    expect(pads['2'].pc).toBe(62);
  });

  test('the knobs are parsed', () => {
    const knobs: any = getKnobsInfo(result);
    expect(knobs['1'].cc).toBe(11);
    expect(knobs['2'].min).toBe(0);
    expect(knobs['3'].max).toBe(100);
  });

  test('the complete result', () => {
    const res = fromSysex(result);
    const pads = res ? Object.entries(res.pads) : [];
    const knobs = res ? Object.entries(res.knobs) : [];

    expect(res).toHaveProperty('knobs');
    expect(res).toHaveProperty('pads');
    expect(res).toHaveProperty('bank');
    expect(pads.length).toBe(8);
    expect(knobs.length).toBe(8);
  });
});