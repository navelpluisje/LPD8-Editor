import React, { useState, useEffect } from 'react';
import { useConfig } from '@context';
import styles from './lpd8Name.module.css';

export const Lpd8Description: React.FC<{}> = () => {
  const { bank, setDescription } = useConfig();
  const [_description, setLpd8Description] = useState(bank.description);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setLpd8Description(bank.description);
  }, [bank]);

  const handleBlur = (e: any) => {
    setEditMode(false);
    setDescription(e.target.innerText);
    setLpd8Description(e.target.innerText);
  }

  return (
    <p
      className={styles['lpd8-description']}
      onClick={() => setEditMode(true)}
      contentEditable={editMode}
      onBlur={handleBlur}
      title="Click twice to edit and leave to save the value"
      suppressContentEditableWarning={true}
    >
      {_description}
    </p>
  );
};