import React, { useState } from 'react';
import { Button, Menu, MenuItem, MenuItems } from '../../atoms';
import { connect, settings, edit } from './assets';

interface Props {
}

export const HeaderMenu: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  return (
    <Menu>
      <Button onClick={toggleOpen}>Menu</Button>
      <MenuItems open={open} onClick={toggleOpen}>
        <MenuItem to="/editor"><img src={edit} alt="" />Editor</MenuItem>
        <MenuItem to="/connect"><img src={connect} alt="" />Connect</MenuItem>
        <MenuItem to="/settings"><img src={settings} alt="" />Settings</MenuItem>
      </MenuItems>
    </Menu>
  );
};