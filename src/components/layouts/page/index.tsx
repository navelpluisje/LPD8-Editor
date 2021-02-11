import React from 'react';
import { Footer } from '@molecules/footer';
import { Header } from '@organisms/header';
import styles from './page.module.css'

export const Page: React.FC<{}> = ({children}) => (
  <div className={styles.app}>
    <Header showMenu />
    {children}
    <Footer />
  </div>
)