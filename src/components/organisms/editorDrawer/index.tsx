import React, { useState } from 'react';
import { DrawerButton } from '@atoms';
import { DrawerItem } from './DrawerItem';
import styles from './editorDrawer.module.css';

export interface Bank {
  _id: string;
  name: string,
  description: string,
}

interface Props {
  banks: Array<Bank>;
}

export const EditorDrawer: React.FC<Props> = ({ banks }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className={`${styles['editor-drawer']} ${open ? styles['open'] : ''}`}>
      <DrawerButton onClick={toggleOpen}>&gt;</DrawerButton>
      <ul>
        {banks && banks.map((bank) => (
          <DrawerItem key={bank._id} bank={bank} />
        ))}
      </ul>
    </section>
  );
};
