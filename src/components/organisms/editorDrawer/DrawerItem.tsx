import React, { useState, useEffect } from 'react';
import { useConfig } from '../../../context';
import './drawerItem.css';

interface DrawerItem {
  name: string;
  bank: any;
}

const toKebab = (value: string): string => (
  value.toLowerCase().replace(' ', '-')
);

export const DrawerItem = ({ bank }: DrawerItem) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('1rem');
  const [id] = useState(toKebab(bank.name));
  const { setActiveBank } = useConfig();

  useEffect(() => {
    const article = document.querySelector(`#${id} > article`);
    setHeight(`${article?.getBoundingClientRect().height}px` || '1rem');
  }, [id]);

  const toggleOpen = () => {
    const item = document.getElementById(id);
    setOpen(!open);
    if (item) {
      item.style.height = !open ? height : '1rem';
    }
  }

  const openBank = () => {
    setActiveBank(bank.name);
  };

  return (
    <li key={bank.name} className="drawer-item" id={id}>
      <article className={open ? 'open' : ''}>
        <header>
          {bank.name} <span onClick={toggleOpen}>
            {open ? <>&#x21A5;</> : <>&#x21A7;</>}
          </span>
        </header>
        <section>
          {bank.description}
        </section>
        <footer>
          <span onClick={openBank}>edit</span>&nbsp;| delete
        </footer>
      </article>
    </li>
  );
};
