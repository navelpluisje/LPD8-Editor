import React from 'react';
import './menu.css';

interface Props {
}

export const Menu: React.FC<Props> = ({ children }) => (
  <section className="menu">
    {children}
  </section>
);
