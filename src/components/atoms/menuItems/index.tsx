import React from 'react';
import './menuItems.css';

interface MenuItems {
  open: boolean;
  onClick: () => void;
}
export const MenuItems: React.FC<MenuItems> = ({ open, onClick, children }) => (
  <nav className={`menu-items ${open ? 'open' : ''}`}>
    <ul onClick={onClick}>
      {children}
    </ul>
  </nav>
);
