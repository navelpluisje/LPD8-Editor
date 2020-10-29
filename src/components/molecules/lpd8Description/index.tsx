import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../context';
import './lpd8Name.css';

interface Props {
};

export const Lpd8Description: React.FC<Props> = () => {
  const { activeBank, setDescription } = useConfig();
  const { description } = activeBank();
  const [_description, setLpd8Description] = useState(description);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setLpd8Description(description);
  }, [description]);

  const handleBlur = (e: any) => {
    setEditMode(false);
    setDescription(e.target.innerText);
    setLpd8Description(e.target.innerText);
  }

  return (
    <p
      className="lpd8-description"
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