import React from 'react';
import logo from './lpd8-logo.svg';
import { bmac, github, twitter } from './assets';

import './header.css';

export const Header: React.FC<any> = () => (
  <header className="site-header">
    <img src={logo} alt="The almighty lpd8 logo" />
    <section className="site-header-contact">
      <a
        href="https://twitter.com/navelpluisje_nl"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={twitter} alt="Follow me on Twitter" />
      </a>
      <a
        href="https://github.com/navelpluisje/LPD8-Editor"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={github} alt="Check the code on Github" />
      </a>
      <a
        href="https://www.buymeacoffee.com/navelpluisje"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={bmac} alt="Buy me a beer if you like this page" />
      </a>
    </section>
  </header>
);
