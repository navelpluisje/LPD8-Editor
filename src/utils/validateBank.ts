import { initialState } from '@context/configuration/context';
import { Bank } from './../types';

export const validateBank = (bank: Bank): Bank => {
  let newBank = {};
  Object.entries(initialState).forEach(([key, value]) => {
    newBank[key] = bank[key] || value;
  });

  return (newBank as Bank);
}