import React, { useReducer, useEffect, useState } from "react";
import { initialState, ConfigContext } from "./context";
import { EventBus } from '../../helpers/eventBus';
import { fromSysex } from '../../helpers/fromSysex';
import { LoadConfiguration, ConfigState, Bank } from '../../types';

export const ConfigContextProvider: React.FC<any> = ({ children }) => {
  const [active, setActiveBank] = useState('initial2');

  const reducer = (state: ConfigState , action: any) => {
    switch (action.type) {
      case 'setPadValue':
        return {
          ...state,
          banks: {
            ...state.banks,
            [active]: {
              ...state.banks[active],
              pads: {
                ...state.banks[active].pads,
                [action.payload.id]: {
                  ...state.banks[active].pads[action.payload.id],
                  [action.payload.key]: action.payload.value,
                }
              }
            }
          }
        };

      case 'setKnobValue':
        return {
          ...state,
          banks: {
            ...state.banks,
            [active]: {
              ...state.banks[active],
              knobs: {
                ...state.banks[active].knobs,
                [action.payload.id]: {
                  ...state.banks[active].knobs[action.payload.id],
                  [action.payload.key]: action.payload.value,
                }
              }
            }
          }
        };

      case 'setBank':
        return {
          ...state,
          banks: {
            ...state.banks,
            [active]: {
              ...state.banks[active],
              bank: action.payload.bank,
            }
          }
        };

      case 'setName':
        const newState: ConfigState = {
          ...state,
          banks: {
            ...state.banks,
            [action.payload.name]: {
              ...state.banks[active],
            }
          }
        };

        delete newState.banks[active];
        setActiveBank(action.payload.name);

        return newState;

      case 'setDescription':
        return {
          ...state,
          banks: {
            ...state.banks,
            [active]: {
              ...state.banks[active],
              description: action.payload.description,
            }
          }
        };

      case 'setMidiChannel':
        return {
          ...state,
          banks: {
            ...state.banks,
            [active]: {
              ...state.banks[active],
              midiChannel: action.payload.midiChannel,
            }
          }
        };

      case 'setConfiguration':
        return {
          ...state,
          banks: {
            ...state.banks,
            [action.payload.name]: {
              ...action.payload.bank,
            }
          }
        };

      case 'setConfigurations':
        return {
          ...state,
          banks: {
            ...Object.entries(action.payload).reduce((acc, [name, bank]) => ({
              ...acc,
              // @ts-ignore
              [name]: { ...(bank.data as Bank) },
            }), {}),
          }
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

  const setConfiguration = (
    name: string,
    bank: Bank,
  ) => {
    dispatch({
      type: 'setConfiguration',
      payload: {
        name,
        bank,
      }
    })
  };

  const setConfigurations = (banks: Record<string, Bank>) => {
    dispatch({
      type: 'setConfigurations',
      payload: banks,
    })
  };

  const activeBank = (): Bank & { name: string } => {
    let bank = {
      ...state.banks[active],
      name: active,
    }

    if (!bank.pads) {
      const newActive = Object.keys(state.banks)[0]
      setActiveBank(newActive);
      bank = {
        ...state.banks[newActive],
        name: newActive,
      }
    }

    return bank;
  }

  const getBanks = (): Array<Bank & { name: string }> => {
    return Object.entries(state.banks).map(([name, bank]) => ({
      ...bank,
      name,
    }))
  }

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
    <ConfigContext.Provider value={{
      activeBank,
      setActiveBank,
      getBanks,
      setPadValue,
      setKnobValue,
      setBank,
      setName,
      setDescription,
      setMidiChannel,
      setConfiguration,
      setConfigurations,
    }}>
      {children}
    </ConfigContext.Provider>
  );
};
