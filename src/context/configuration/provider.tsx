import React, { useReducer, useEffect, useState } from "react";
import { initialState, ConfigContext } from "./context";
import { Bank } from '../../types';

interface ProviderProps {
  bank: Bank,
}

export const ConfigContextProvider: React.FC<ProviderProps> = ({ bank = initialState, children }) => {
  const reducer = (state: Bank , action: any) => {
    switch (action.type) {
      case 'setPadValue':
        return {
          ...state,
          pads: {
            ...state.pads,
            [action.payload.id]: {
              ...state.pads[action.payload.id],
              [action.payload.key]: action.payload.value,
            }
          }
        };

      case 'setKnobValue':
        return {
          ...state,
          knobs: {
            ...state.knobs,
            [action.payload.id]: {
              ...state.knobs[action.payload.id],
              [action.payload.key]: action.payload.value,
            }
          }
        };

      case 'setBank':
        return {
          ...action.payload.bank,
        };

      case 'setName':
        return {
          ...state,
          name: action.payload.name,
        };

      case 'setDescription':
        return {
          ...state,
          description: action.payload.description,
        };

      case 'setMidiChannel':
        return {
          ...state,
          midiChannel: action.payload.midiChannel,
        };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(reducer, bank);

  const setPadValue = (id: string, key: string, value: number) => (
    dispatch({
      type: "setPadValue",
      payload: {
        id,
        key,
        value,
      }
    })
  );

  const setKnobValue = (id: string, key: string, value: number) => (
    dispatch({
      type: "setKnobValue",
      payload: {
        id,
        key,
        value,
      }
    })
  );

  const setBank = (bank: Bank) => {
    dispatch({
      type: 'setBank',
      payload: {
        bank
      }
    })
  };

  const setName = (name: string) => {
    dispatch({
      type: 'setName',
      payload: {
        name
      }
    })
  };

  const setDescription = (description: string) => {
    dispatch({
      type: 'setDescription',
      payload: {
        description
      }
    })
  };

  const setMidiChannel = (midiChannel: number) => {
    dispatch({
      type: 'setMidiChannel',
      payload: {
        midiChannel,
      }
    })
  };

  return (
    <ConfigContext.Provider value={{
      bank: state,
      setBank,
      setPadValue,
      setKnobValue,
      setName,
      setDescription,
      setMidiChannel,
    }}>
      {children}
    </ConfigContext.Provider>
  );
};
