import React, { useState, useEffect } from 'react';
import { useConfig } from '@context';
import styles from './drawerItem.module.css';
import { Bank } from '.';
import { getCookies } from '@utils/getCookies';
import { getBankById } from '@utils/getBankById';

interface DrawerItem {
  bank: Bank;
}

export const DrawerItem = ({ bank: {_id, ...rest} }: DrawerItem) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('1.1rem');
  const { setBank } = useConfig();

  useEffect(() => {
    const article = document.querySelector(`[data-id="${_id}"] > article`);
    setHeight(`${article?.getBoundingClientRect().height}px` || '1.1rem');
  }, [rest]);

  const toggleOpen = (id: string) => {
    const item = document.querySelector<HTMLUListElement>(`[data-id="${_id}"]`);
    setOpen(!open);
    if (item) {
      item.style.height = !open ? height : '1.1rem';
    }
  }

  const loadBank = async (id: string) => {
    const bank = await getBankById(id);
    console.log(bank);
    // const response = await fetch(`http://localhost:3000/api/bank/get/${id}`, {
    //   method: 'GET',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'lpd8_token': '5fe3b585b47b5a1b6de4f446',
    //   },
    // });

    // const bank = await response.json();
    setBank( bank );
  };

  return (
    <li key={_id} className={styles['drawer-item']} data-id={_id}>
      <article className={open ? 'open' : ''}>
        <header>
          {rest.name} <span onClick={() => toggleOpen(_id)}>
            {open ? <>&#x21A5;</> : <>&#x21A7;</>}
          </span>
        </header>
        <section>
          {rest.description}
        </section>
        <footer>
          <span onClick={() => loadBank(_id)}>edit</span>&nbsp;| delete
        </footer>
      </article>
    </li>
  );
};
