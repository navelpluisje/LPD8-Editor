import React, { useReducer, useEffect } from "react";
import { initialState, ConfigContext } from "./context";
import { EventBus } from '../../helpers/eventBus';
import { fromSysex } from '../../helpers/fromSysex';
import { LoadConfiguration, Configuration } from '../../types';

export const ConfigContextProvider: React.FC<any> = ({ children }) => {
  const reducer = (state: Configuration , action: any) => {
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
          ...state,
          bank: action.payload.bank,
        };

      case 'setMidiChannel':
        return {
          ...state,
          midiChannel: action.payload.midiChannel,
        };

      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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

  const setBank = (bank: string) => {
    dispatch({
      type: 'setBank',
      payload: {
        bank
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

  const loadConfiguration = (configuration: Uint8Array) => {
    const config: LoadConfiguration | null = fromSysex(configuration);
    if ( config !== null ) {
      setMidiChannel(config.midiChannel);
      Object.entries(config.knobs).forEach(([id, knob]) => {
        Object.entries(knob as any).forEach(([key, value]) => {
          setKnobValue(id, key, value as any);
        })
      })
      Object.entries(config.pads).forEach(([id, pad]) => {
        Object.entries(pad as any).forEach(([key, value]) => {
          setPadValue(id, key, value as any);
        })
      })
    }
  }

  useEffect(() => {
    EventBus.subscribe('change-bank', setBank);
    EventBus.subscribe('received-config', loadConfiguration);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* We're Providing state object (langCode and translate method
  in this case) and also the setLanguage for the children components */
  return (
    <ConfigContext.Provider value={{...state, setPadValue, setKnobValue, setBank, setMidiChannel}}>
      {children}
    </ConfigContext.Provider>
  );
};
