import React from 'react';
import './drawerButton.css';

interface Props {
  onClick: () => void;
}

export const DrawerButton: React.FC<Props> = ({ onClick, children }) => (
  <button className="drawer-button" onClick={onClick}>{children}</button>
);
