import React from 'react';
import styles from './menu.module.css';

interface Props {
}

export const Menu: React.FC<Props> = ({ children }) => (
  <section className={styles.menu}>
    {children}
  </section>
);
