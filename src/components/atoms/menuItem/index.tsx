import React from 'react';
import Link from 'next/link';
import styles from './menuItem.module.css';

interface MenuItem {
  to?: string;
  callback?: () => void;
}

export const MenuItem: React.FC<MenuItem> = ({ to, callback, children }) => (
  <li className={styles['menu-item']}>
    {to && <Link href={to}><a>{children}</a></Link>}
    {callback && <span onClick={callback}>{children}</span>}
  </li>
)
