import React from 'react';
import logo from './lpd8-logo.svg';
import './header.css';

export const Header: React.FC<any> = () => (
  <header className="site-header">
    <img src={logo} alt="The almighty lpd8 logo" />
  </header>
);
