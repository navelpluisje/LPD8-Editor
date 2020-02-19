import React from 'react';
import './editor.css';

export const Editor: React.FC<any> = ({children}) => (
  <section className="editor-area">{children}</section>
);
