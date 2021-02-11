import React, { useState, useEffect } from 'react';
import { useConfig } from '@context';
import styles from './lpd8Name.module.css';

export const Lpd8Name: React.FC<{}> = () => {
  const { bank, setName } = useConfig();
  const [_name, setLpd8Name] = useState(bank.name);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setLpd8Name(bank.name);
  }, [bank]);

  const handleBlur = (e: any) => {
    setEditMode(false);
    setName(e.target.innerText);
    setLpd8Name(e.target.innerText);
  }

  return (
    <h2
      className={styles['lpd8-name']}
      onClick={() => setEditMode(true)}
      contentEditable={editMode}
      onBlur={handleBlur}
      title="Click twice to edit and leave to save the value"
      suppressContentEditableWarning={true}
    >
      {_name}
    </h2>
  );
};