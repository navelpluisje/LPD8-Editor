import React from 'react';
import { HeaderMenu } from '../../molecules/headerMenu';
import { logo } from './assets';
import './header.css';

interface Props {
  showMenu: boolean;
};

export const Header: React.FC<Props> = ({ showMenu }) => (
  <header className="site-header">
    <img src={logo} alt="The almighty lpd8 logo" />
    <section className="site-header-contact">
      {showMenu && <HeaderMenu />}
    </section>
  </header>
);
