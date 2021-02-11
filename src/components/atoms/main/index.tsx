import React, { useEffect } from 'react';
import { useConfig, useConnection } from '@context';

interface Props {}

export const Main: React.FC<Props> = ({ children }) => {
  const { setConfigurations } = useConfig();
  const { banks } = useConnection();

  useEffect(() => {
    if (banks) {
      setConfigurations(banks);
    }
  }, [banks]);

  return (
    <>
      {children}
    </>
  );
};
