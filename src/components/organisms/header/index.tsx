import React from 'react';
import { HeaderMenu } from '@molecules/headerMenu';
import styles from './header.module.css';

interface Props {
  showMenu: boolean;
};

export const Header: React.FC<Props> = ({ showMenu }) => (
  <header className="site-header">
    <img src="/images/lpd8-logo.svg" alt="The almighty lpd8 logo" />
    <section className="site-header-contact">
      {showMenu && <HeaderMenu />}
    </section>
  </header>
);
