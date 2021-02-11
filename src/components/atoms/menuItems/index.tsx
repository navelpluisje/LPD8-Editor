import React from 'react';
import styles from './menuItems.module.css';

interface MenuItems {
  open: boolean;
  onClick: () => void;
}
export const MenuItems: React.FC<MenuItems> = ({ open, onClick, children }) => (
  <nav className={`${styles['menu-items']} ${open ? styles['open'] : ''}`}>
    <ul onClick={onClick}>
      {children}
    </ul>
  </nav>
);
