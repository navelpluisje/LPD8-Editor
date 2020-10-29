import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../context';
import './lpd8Name.css';

interface Props {
};

export const Lpd8Name: React.FC<Props> = () => {
  const { activeBank, setName } = useConfig();
  const { name } = activeBank();
  const [_name, setLpd8Name] = useState(name);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setLpd8Name(name);
  }, [name]);

  const handleBlur = (e: any) => {
    setEditMode(false);
    setName(e.target.innerText);
    setLpd8Name(e.target.innerText);
  }

  return (
    <h2
      className="lpd8-name"
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