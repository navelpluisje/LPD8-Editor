import React, { useState } from 'react';
import { Button, Menu, MenuItem, MenuItems } from '@atoms';

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
        <MenuItem to="/editor"><img src="/images/edit.svg" alt="" />Editor</MenuItem>
        <MenuItem to="/connect"><img src="/images/connect.svg" alt="" />Connect</MenuItem>
        <MenuItem to="/settings"><img src="/images/settings.svg" alt="" />Settings</MenuItem>
      </MenuItems>
    </Menu>
  );
};