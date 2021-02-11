import {
  getConfigurationForBank,
} from './sysexMessages';

describe('The sysexMessage functions', () => {
  test('the configuration for bank', () => {
    expect(getConfigurationForBank('1')[7]).toBe(1);
    expect(getConfigurationForBank('2')[7]).toBe(2);
  });
});