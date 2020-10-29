import React from 'react';
import { bmac, github, twitter, navelpluisje } from './assets';
import './footer.css';

export const Footer = () => (
  <footer className="site-footer">
    Created by
    <a
      href="https://navelpluisje.nl"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src={navelpluisje} alt="Visit me on navelpluisje.nl" />
    </a>
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
  </footer>
)