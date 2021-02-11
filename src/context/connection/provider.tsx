import React, { useReducer, useEffect } from "react";
import { initialState, ConnectionContext } from "./context";

export const ConnectionProvider: React.FC<any> = ({ children }) => {

  const reducer = (state: any , action: any) => {
    switch (action.type) {
      case 'setConfigurations':
        return {
          ...state,
          ...action.payload,
          token: state.token,
        };

      case 'setConnectionToken':
        return {
          ...state,
          token: action.payload,
        };

      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const loadConfigurations = async () => {
    if (!Boolean(state.token)) {
      return;
    }
    let result;
    const response = await fetch('http://localhost:9000/.netlify/functions/config-by-key', {
      body: JSON.stringify({key: state.token}),
      method: 'POST'
    });

    try {
      result = await response.json();

      dispatch({
        type: 'setConfigurations',
        payload: result,
      })
    } catch (e) {
      console.error(e);
    }
  };

  const setConnectionToken = async (token: string, loadConfig: boolean = false) => {
    localStorage.setItem('lpd8-token', token)
    dispatch({
      type: 'setConnectionToken',
      payload: token,
    });

    if (loadConfig) {
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('lpd8-token');
    if (token) {
      setConnectionToken(token, true);
      loadConfigurations();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* We're Providing state object (langCode and translate method
  in this case) and also the setLanguage for the children components */
  return (
    <ConnectionContext.Provider value={{...state, loadConfigurations, setConnectionToken}}>
      {children}
    </ConnectionContext.Provider>
  );
};
