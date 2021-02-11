import { createContext } from 'react';

export const initialState: Record<string, any> = {
  token: '', //localStorage.getItem('lpd8-token'),
};

export const ConnectionContext = createContext(initialState);
