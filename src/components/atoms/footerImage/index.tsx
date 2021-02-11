import React from 'react';
import { Props } from './types';

export const FooterImage: React.FC<Props> = ({
  link,
  src,
  alt
}) => (
  <a
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <img src={src} alt={alt} />
  </a>
)