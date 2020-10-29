import React, { useState } from 'react';
import { DrawerButton } from '../../atoms';
import { DrawerItem } from './DrawerItem';
import { useConfig } from '../../../context';
import './editorDrawer.css';

export const EditorDrawer: React.FC<any> = () => {
  const [open, setOpen] = useState(false);
  const { getBanks } = useConfig();
  const banks = getBanks();

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className={`editor-drawer ${open ? 'open' : ''}`}>
      <DrawerButton onClick={toggleOpen}>&gt;</DrawerButton>
      <ul>
        {banks && Object.entries(banks).map(([name, bank]: [string, any]) => (
          <DrawerItem key={name} name={name} bank={bank} />
        ))}
      </ul>
    </section>
  );
};
