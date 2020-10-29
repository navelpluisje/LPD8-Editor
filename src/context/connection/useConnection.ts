import { useContext } from "react";
import { ConnectionContext } from "./context";

export const useConnection = () => {
  const { loadConfigurations, setConnectionToken, __key__, banks, token } = useContext(ConnectionContext);

  return {
    loadConfigurations,
    setConnectionToken,
    __key__,
    connectionToken: token,
    banks,
  };
};
