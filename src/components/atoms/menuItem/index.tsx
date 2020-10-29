import React from 'react';
import { Link } from 'react-router-dom';
import './menuItem.css';

interface MenuItem {
  to?: string;
  callback?: () => void;
}

export const MenuItem: React.FC<MenuItem> = ({ to, callback, children }) => (
  <li className="menu-item">
    {to && <Link to={to}>{children}</Link>}
    {callback && <span onClick={callback}>{children}</span>}
  </li>
)
