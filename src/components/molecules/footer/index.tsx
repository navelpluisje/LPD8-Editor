import { FooterImage } from '@atoms/footerImage';
import React from 'react';

// The footer style is in globals.css.
// This is done because it is included in the _document.

export const Footer = () => (
  <footer className="site-footer">
    Created by
    <FooterImage
      link="https://navelpluisje.nl"
      src="/images/navelpluisje.svg"
      alt="Visit me on navelpluisje.nl"
    />
    <FooterImage
      link="https://twitter.com/navelpluisje_nl"
      src="/images/twitter.svg"
      alt="Follow me on Twitter"
    />
    <FooterImage
      link="https://github.com/navelpluisje/LPD8-Editor"
      src="/images/github.svg"
      alt="Follow me on Twitter"
    />
    <FooterImage
      link="https://www.buymeacoffee.com/navelpluisje"
      src="/images/bmac.svg"
      alt="Buy me a beer if you like this page"
    />
  </footer>
)