import React from 'react';
import styles from './editor.module.css';

export const Editor: React.FC<any> = ({children}) => (
  <section className={styles['editor-area']}>{children}</section>
);
