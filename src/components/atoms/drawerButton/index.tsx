import React from 'react';
import styles from './drawerButton.module.css';

interface Props {
  onClick: () => void;
}

export const DrawerButton: React.FC<Props> = ({ onClick, children }) => (
  <button className={styles['drawer-button']} onClick={onClick}>{children}</button>
);
